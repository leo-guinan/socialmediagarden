import { useState } from "react"
import { useMutation } from "@blitzjs/rpc"
import addGardenForUser from "../mutations/addGardenForUser"

const AddGardenForUser = ({ user }) => {

  const [slug, setSlug] = useState("")

  const [addGardenForUserMutation] = useMutation(addGardenForUser)


  return (
    <>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Feed URL
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="slug"
            id="slug"
            onChange={(e) => setSlug(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="slug"
          />
        </div>
      </div>
      <button
        type="button"
        className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={async () => {
          console.log(slug)
          await addGardenForUserMutation({ slug: slug, userId: user.id })
          return true
        }}
      >
        Add Garden To User
      </button>
    </>
  )
}

export default AddGardenForUser
