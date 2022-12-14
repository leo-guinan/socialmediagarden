import { Ctx } from "blitz"
import db from "db"
import axios from "axios"
import { SVGProps } from "react"



type GetFeedsForUserInput = {
  userId: number
}

type TwitterAccount = {
  id: number
  twitterId: string
  twitterName: string
  twitterScreenName: string
  twitterProfileImageUrl: string
}

type ContentSource = {
  name: string,
  feed_location: string,
}

type ClientAccount = {
  id: number,
  email: string,
  twitterAccount: TwitterAccount,

}


type Content = {
  id: number,
  url: string,
  title: string,
  summary: string,
  published: string,
  owner: ClientAccount,
  type: string,
}

export type Feed = {
  id: number,
  source: ContentSource,
  owner: ClientAccount,
  content: Content[],
}

export default async function getFeedsForUser({ userId }: GetFeedsForUserInput, _: Ctx): Promise<Feed[]> {
  console.log("getFeedsForUser", userId)
  const user = await db.user.findFirst({
    where: { id: userId }
  })

  if (!user) return []

  const feeds = await db.feed.findMany({
    where: {
      savedBy: {
        some: {
          id: userId
        }
      }
    }
  })
  const feedIds = feeds.map(feed => feed.id)

  const analysisURL = process.env.API_URL + "/api/garden/feeds/"
  let error = null
  let feedsToReturn: Feed[] = []
  await axios
    .post(
      analysisURL,
      {
        feed_ids: feedIds
      },
      {
        headers: {
          Authorization: `Api-Key ${process.env.BACKEND_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    )
    .then(async ({ data }) => {
      feedsToReturn = data.feeds
    })
    .catch((err) => {
      console.log(err)
      error = err
      return []
    })

  console.log(feedsToReturn)
  return feedsToReturn


}
