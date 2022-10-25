import { Ctx } from "blitz"
import db from "../../../db"

type GetGardenForUserInput = {
  userId: number
}

export default async function getGardenForUser({ userId }: GetGardenForUserInput, { session }: Ctx) {
  const organization = await db.organization.findFirst({
      where: {
        membership: {
          some: {
            userId: userId
          }
        }
      }
    })
  if (!organization) {
    throw new Error("Organization not found")
  }

  const garden = await db.garden.findFirst({
    where: { ownerId: organization.id },
  })

  if (!garden) {
    throw new Error("Garden not found")
  }
  return garden

}
