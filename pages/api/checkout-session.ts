import stripe from "integrations/stripe"
import { NextApiRequest, NextApiResponse } from "next"

// https://stripe.com/docs/billing/subscriptions/checkout#customer-portal
export default async function checkoutSession(req: NextApiRequest, res: NextApiResponse) {
  const { sessionId } = req.query

  try {
    if (Array.isArray(sessionId) || !sessionId) {
      throw new Error("only one sessionId parameter allowed")
    }
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    res.send(session)
  } catch (e) {
    res.status(400)
    return res.send({
      error: {
        message: e.message,
      },
    })
  }
}
