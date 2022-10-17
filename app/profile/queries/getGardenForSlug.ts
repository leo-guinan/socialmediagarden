import { Ctx } from "blitz"
import db from "db"

type GetGardenForSlugInput = {
  slug?: string
}

export default async function getGardenForSlug({ slug }: GetGardenForSlugInput, { session }: Ctx) {
  if (!slug) return null
  const garden =  await db.garden.findFirst({
    where: { slug },
    include: {
      featuredContent: true,
    }
  })

  console.log(garden)
  return garden


}
