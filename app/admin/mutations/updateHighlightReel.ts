import { Ctx } from "blitz"
import db from "db"

type UpdateGardenInput = {
  gardenId: number,
  highlightReel: string,
}

export default async function updateHighlightReel(
  { gardenId, highlightReel }: UpdateGardenInput,
  ctx: Ctx
) {
    await db.garden.update({
      where: {
        id: gardenId
      },
      data: {
        featuredContent: {
          create: {
            link: highlightReel,
          }
        }
      }
    })

}
