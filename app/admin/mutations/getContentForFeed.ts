import axios from "axios"
import db, {Content} from "../../../db"
import { Ctx } from "blitz"
type GetContentForFeedInput = {
  feedId: number
}

export default async function getContentForFeed(
  { feedId }: GetContentForFeedInput,
  ctx: Ctx
) {
  console.log("Getting content for feed: " + feedId)

  const feed = await db.feed.findFirst({
    where: { id: feedId },
  });

  if(!feed) {
    throw new Error("Feed not found")
  }

  const content: Content[] = []

  const analysisURL = process.env.API_URL + "/api/garden/get_content/"
  let error = null
  await axios
    .post(
      analysisURL,
      {
        feed_id: feed.backendFeedId
      },
      {
        headers: {
          Authorization: `Api-Key ${process.env.BACKEND_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    )
    .then(async ({ data }) => {
      console.log("content from backend")
      console.log(data)
      data.content.map(async (item: any) => {
        await db.content.upsert({
          where: {
            feed_content:{
              feedId: feedId,
              backendContentId: item.id
            }
          },
          create: {
            backendContentId: item.id,
            title: item.title,
            link: item.url,
            description: item.summary,
            image: item.image,
            feedId
          },
          update: {
            title: item.title,
            link: item.url,
            description: item.summary,
            image: item.image,
          }
        })
      })
    })
    .catch((err) => {
      console.log(err)
      error = err
    })

  return content
}
