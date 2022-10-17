import { Ctx } from "blitz"
import db, { FeedType } from "db"
import axios from "axios"

type AddFeedToAccountInput = {
  userId: number
  feedUrl: string
  type: string
}

export default async function addFeedToAccount(
  { userId, feedUrl, type }: AddFeedToAccountInput,
  ctx: Ctx
) {
  console.log(feedUrl)
  ctx.session.$authorize()
  let feedType: FeedType
  switch (type) {
    case  "YouTube":
      feedType = FeedType.YOUTUBE
      break
    case "Podcast":
      feedType = FeedType.PODCAST
      break
    case "Video":
      feedType = FeedType.VIDEO
      break
    case "Blog":
      feedType = FeedType.BLOG
      break
    default:
      feedType = FeedType.BLOG
      break
  }
  const feed = await db.feed.upsert({
    where: { feed: feedUrl },
    create: {
      feed: feedUrl,
      type: feedType,
      savedBy: {
        connect: { id: userId }
      }
    },
    update: {
      savedBy: {
        connect: { id: userId }
      }
    }
  })
  const user = await db.user.findFirst({
    where: { id: userId }
  })

  if (!user) throw new Error("User not found")

  const analysisURL = process.env.API_URL + "/api/garden/add_feed/"
  let error = null
  await axios
    .post(
      analysisURL,
      {
        client_account_id: user.clientAccountId,
        feed_url: feed,
        // type: feedType
      },
      {
        headers: {
          Authorization: `Api-Key ${process.env.BACKEND_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    )
    .then(async ({ data }) => {
      await db.feed.update({
        where: { feed: feedUrl },
        data: {
          backendFeedId: Number(data.content_feed_id)
        }
      })
    })
    .catch((err) => {
      console.log(err)
      error = err
    })

}
