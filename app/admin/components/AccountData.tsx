const AccountData = ({ user }) => {
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
              <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                {user.savedFeeds && user.savedFeeds.map((feed, i) => (
                  <li key={"feed_" + i} className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                    <div className="flex w-0 flex-1 items-center">
                      {/*<PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />*/}
                      <span className="ml-2 w-0 flex-1 truncate">{feed.feed}</span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      {/*<a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">*/}
                      {/*  Download*/}
                      {/*</a>*/}
                    </div>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </>)
}

export default AccountData
