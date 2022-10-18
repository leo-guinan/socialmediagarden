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
  const organization = await db.organization.findFirst({
    where: {
      membership: {
        some: {
          userId: userId,
        }
      }
    }

  });
  if (!organization) {
    throw new Error("Organization not found")
  }
  const garden = await db.garden.findFirst({
    where: { ownerId: organization.id },
  })
  if (!garden) {
    throw new Error("Garden not found")
  }
  const feed = await db.feed.upsert({
    where: { feed: feedUrl },
    create: {
      feed: feedUrl,
      type: feedType,
      gardens: {
        connect: {
          id: garden.id
        }
      },

    },
    update: {
      type: feedType,
      gardens: {
        connect: {
          id: garden.id
        }
      },
    }
  })

  console.log(feed)
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
        feed_url: feedUrl,
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
