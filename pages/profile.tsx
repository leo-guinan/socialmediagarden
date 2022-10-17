import Layout from "app/core/layouts/Layout"

import { BlitzPage } from "@blitzjs/next"
import { Suspense } from "react"
import Profile from "../app/profile/components/Profile"


const ProfilePage: BlitzPage = () => {
  return (
    <Layout title="Home">
      <div className="container mx-auto">
        <Suspense fallback="Loading...">
          <Profile slug="tshubillabong" />
        </Suspense>
      </div>
    </Layout>
  )
}

export default ProfilePage
