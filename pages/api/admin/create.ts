import { getSession } from "@blitzjs/auth"

import { NextApiRequest, NextApiResponse } from "next"
import db, {GlobalRole} from "db"
import axios from "axios"
import { api } from "../../../app/blitz-server"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    console.log("create account")
    const session = await getSession(req, res)
    if (!session.userId) {
      return res.status(401).send({ success: false, error: "User not logged in" })
    }
    const user = await db.user.findFirst({ where: { id: session.userId } })
    if (!user || user.role !== GlobalRole.SUPERADMIN) {
      return res.status(500).send({ success: false, error: "No user found" })
    }
    const { email } = JSON.parse(req.body)

    const newUser = await db.user.upsert({
      where: {
        email
      },
      create: {
        email: email.toLowerCase().trim(),
        role: GlobalRole.CUSTOMER,
        memberships: {
          create: {
            role: "OWNER",
            organization: {
              create: {
                name: "Default Organization",
                plan: {
                  connect: {
                    //ID 1 is the free plan
                    id: 1
                  }
                }
              },
            },

          },
        },

      },
      update: {},
    })


    const analysisURL = process.env.API_URL + "/api/client/email_login/"
    let error = null
    await axios
      .post(
        analysisURL,
        {
          email,
          client: "SMG"
        },
        {
          headers: {
            Authorization: `Api-Key ${process.env.BACKEND_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then(async ({ data }) => {
        await db.user.upsert({
          where: {
            email
          },
          create: {
            email,
            clientAccountId: data['client_account_id'],
            role: GlobalRole.CUSTOMER
          },
          update: {
            clientAccountId: data['client_account_id'],
          }
        })
      })
      .catch((err) => {
        console.log(err)
        error = err
      })

    if (error) {
      return res.status(500).send({ success: false, error: "Unable to communicate with backend" })
    }
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.end(
      JSON.stringify({ "success": true })
    )
  } else {
    res.statusCode = 405
    res.end()
  }
}

export default api(handler)
