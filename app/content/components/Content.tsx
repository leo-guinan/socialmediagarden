import { useQuery } from "@blitzjs/rpc"
import getContentById from "../queries/getContentById"
import {FeedType} from "db"
import AudioCard from "audiocard"
const Content = ({ id }) => {

  const [content] = useQuery(getContentById, { id: id })

  return (
    <>
      {content && (
        <>
          <h1>{content.title}</h1>
          {content.feed && content.feed.type === FeedType.PODCAST && (
            <>
              <AudioCard
              art={content.image ?? ""}
              source={content.link}
              />
            </>
          )}
        </>
      )}
    </>
  )
}

export default Content
