import { BlitzPage, ErrorBoundary } from "@blitzjs/next"
import { useRouter } from "next/router"
import { Suspense, useEffect } from "react"
import Profile from "../../app/profile/components/Profile"
import Layout from "../../app/core/layouts/Layout"
import { useCurrentUser } from "../../app/core/hooks/useCurrentUser"
import Content from "../../app/content/components/Content"

const ContentPage: BlitzPage = () => {
  const router = useRouter()
  const { cid } = router.query

  const myErrorHandler = (
    error: Error,
    info: { componentStack: string }
  ) => {
    console.log(error)
  }
  const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
      <>This errored because Error</>
    )
  }


  return (
    <Layout title="Profile">
      <div className="container mx-auto">
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onError={myErrorHandler}
        >
          <Suspense fallback="Loading...">
            <>
              {cid && <Content id={Number(cid)} />}
            </>

          </Suspense>
        </ErrorBoundary>
      </div>
    </Layout>
  )
}

ContentPage.suppressFirstRenderFlicker = true
export default ContentPage
