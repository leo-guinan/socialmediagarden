
import Layout from "app/core/layouts/Layout"

import { Routes, BlitzPage } from "@blitzjs/next"
import Pricing from "../app/pricing/components/Pricing"
import { Suspense } from "react"


const Presale: BlitzPage = () => {
  return (
    <Layout title="Home">
      <div className="container">
        <Suspense fallback="Loading...">
          <Pricing />
        </Suspense>
      </div>
    </Layout>
  )
}

export default Presale
