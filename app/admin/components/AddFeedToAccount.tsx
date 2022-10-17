import { useMutation } from "@blitzjs/rpc"
import addFeedToAccount from "../mutations/addFeedToAccount"
import { useState } from "react"
import SelectFeedType from "./SelectFeedType"

const AddFeedToAccount = ({ user }) => {

  const [feed, setFeed] = useState("")

  const [addFeed] = useMutation(addFeedToAccount)
  const feedTypes: string[] = [
    "YouTube",
    "Podcast",
    "Video",
    "Blog"
  ]

  const [selected, setSelected] = useState(feedTypes[0] ?? "")

  return (
    <>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Feed URL
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="feed"
            id="feed"
            onChange={(e) => setFeed(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="https://example.com/feed.xml"
          />
        </div>
      </div>
      <div>
       <SelectFeedType selected={selected} setSelected={setSelected} feedTypes={feedTypes} />
      </div>
      <button
        type="button"
        className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={async () => {
          console.log(feed)
          await addFeed({ feedUrl: feed, userId: user.id, type: selected })
          return true
        }}
      >
        Add Feed To Account
      </button>
    </>
  )
}

export default AddFeedToAccount
