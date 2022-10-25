import { Ctx } from "blitz"
import db from "db"

type GetContentByIdInput = {
  id: number
}

export default async function getContentById({ id }: GetContentByIdInput, { session }: Ctx) {
  const content = await db.content.findFirst({
    where: { id },
    include: {
      feed: true
    }
  })

  return content
}
