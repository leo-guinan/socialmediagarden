import { Ctx } from "blitz"
import db from "db"

type AddGardenForUserInput = {
  userId: number,
  slug: string,
}

export default async function addGardenForUser(
  { userId, slug }: AddGardenForUserInput,
  ctx: Ctx
) {
  ctx.session.$authorize()
  const org = await db.organization.findFirst({
    where: {
      membership: {
        some: {
          userId
        }
      }
    }
  });
  if (!org) {
    throw new Error("User not found")
  }
  const garden = await db.garden.upsert({
    where: {
      slug
    },
    create: {
      slug,
      owner: {
        connect: { id: org.id }
      },
      public: true
    },
    update: {}
  })

  return garden

}
