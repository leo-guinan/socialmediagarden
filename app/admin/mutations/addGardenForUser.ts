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
  const garden = await db.garden.upsert({
    where: {
      slug
    },
    create: {
      slug,
      owner: {
        connect: { id: userId }
      },
      public: true
    },
    update: {}
  })

  return garden

}
