import { BlitzPage } from "@blitzjs/next"
import Layout from "../../app/core/layouts/Layout"
import CreateAccount from "../../app/admin/components/CreateAccount"
import { Suspense, useState } from "react"
import SelectAccount from "../../app/admin/components/SelectAccount"
import AccountInfo from "../../app/admin/components/AccountInfo"

const Dashboard: BlitzPage = () => {

  const [user, setUser] = useState(null)

  const handleUserSelect = (user) => {
    setUser(user)
  }


  return (
    <div>
      <p>
        <span>Dashboard</span>
        <Suspense fallback="Loading...">
          <CreateAccount />
          <SelectAccount onUserSelect={handleUserSelect} />
          {user && <AccountInfo user={user} />}
        </Suspense>
      </p>
    </div>
  )
}

Dashboard.suppressFirstRenderFlicker = true
Dashboard.getLayout = (page) => <Layout title="Dashboard">{page}</Layout>
export default Dashboard
