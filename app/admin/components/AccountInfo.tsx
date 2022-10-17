import AddFeedToAccount from "./AddFeedToAccount"
import AccountData from "./AccountData"
import AddGardenForUser from "./AddGardenForUser"
import UpdateHighlightReel from "./UpdateHighlightReel"

const AccountInfo = ({user}) => {
  return (
    <>
      <AccountData user={user} />
      <AddFeedToAccount user={user} />
      <AddGardenForUser user={user} />
      <UpdateHighlightReel user={user} />
    </>
  )
}

export default AccountInfo
