import { BlitzPage, ErrorBoundary } from "@blitzjs/next"
import { useRouter } from "next/router"
import { Suspense, useEffect } from "react"
import Profile from "../../app/profile/components/Profile"
import Layout from "../../app/core/layouts/Layout"
import { useCurrentUser } from "../../app/core/hooks/useCurrentUser"

const UserProfile: BlitzPage = () => {
  const router = useRouter()
  const { slug } = router.query
  useEffect(() => {
    console.log(slug)
  })

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
            {slug && <Profile slug={slug} />}
          </>

        </Suspense>
        </ErrorBoundary>
      </div>
    </Layout>
  )
}

UserProfile.suppressFirstRenderFlicker = true
export default UserProfile
