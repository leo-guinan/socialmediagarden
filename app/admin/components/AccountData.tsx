import Feeds from "./Feeds"
import { useQuery } from "@blitzjs/rpc"
import getGardenForUser from "../queries/getGardenForUser"

const AccountData = ({ user }) => {
  const [garden] = useQuery(getGardenForUser, { userId: user.id })
  return (<>
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Account Data</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.name}</dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.email}</dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Feeds</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <Feeds gardenId={garden.id} />
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </>)
}

export default AccountData
