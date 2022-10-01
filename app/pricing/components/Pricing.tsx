import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from "react"
import { useMutation, useQuery } from "@blitzjs/rpc"
import getNumberOfPurchases from "../queries/getNumberOfPurchases"
import { Routes } from "@blitzjs/next"
import Link from "next/link"
import getLifetimeDealsRemaining from "../queries/getLifetimeDealsRemaining"
import { useCurrentUser } from "../../core/hooks/useCurrentUser"
import { useRouter } from "next/router"
import createCheckoutSession from "../mutations/createCheckoutSession"
import { loadStripe } from "@stripe/stripe-js"

const Pricing = () => {

  const includedFeatures = [
    "Access to Beta Features",
    "5 Invites",
    "Community Garden",
    "Tools to help you manage your content and social media accounts",
    "Access to the Social Media Garden Community",
  ]

  const lifetimeBonuses = [
    "All annual features plus:",
    "Special Highlight Video created from your content",
    "Special Events",
    "Podcast Appearance",
  ]

  const [currentPrice, setCurrentPrice] = useState("$250")
  const [numberOfPurchases] = useQuery(getNumberOfPurchases, null)
  const [remainingLifetime] = useQuery(getLifetimeDealsRemaining, null)
  const currentUser = useCurrentUser()
  const [createCheckoutSessionMutation] = useMutation(createCheckoutSession)

  const router = useRouter()
  useEffect(() => {
    if(numberOfPurchases > 30) {
      setCurrentPrice("$250")
    } else if (numberOfPurchases > 20) {
      setCurrentPrice("$200")
    } else if (numberOfPurchases > 10) {
      setCurrentPrice("$150")
    } else {
      setCurrentPrice("$100")
    }
  }, [numberOfPurchases])


  const handlePurchase = async (e) => {
    if (!currentUser) {
      await router.push(Routes.SignupPage(),)
      return
    }
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string)

    const plan = e.target.dataset.plan === "annual" ? process.env.NEXT_PUBLIC_ANNUAL_PRESALE as string : process.env.NEXT_PUBLIC_LIFETIME_PRESALE as string

    const { sessionId } = await createCheckoutSessionMutation({priceId: plan , email: currentUser.email})
    if (!stripe) {
      throw new Error("Stripe could not be loaded")
    }
    const result = await stripe.redirectToCheckout({
      sessionId,
    })
    if (result.error) {
      console.error(result.error.message)
    }


  }

  return (
    <div className="bg-gray-100">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Tiered Presale Pricing
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Annual plans only available pre-launch. Plan does&apos;t start until the official launch.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Annual Plan</h3>
                <p className="mt-6 text-base text-gray-500">
                  Annual plans will start at $100/year and go up every 10 purchases, until the full price of $250 is reached.
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 bg-white pr-4 text-base font-semibold text-indigo-600">
                      What&apos;s included
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul role="list" className="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0">
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg font-medium leading-6 text-gray-900">Lock in your price forever</p>
                <div className="mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900">
                  <span>{currentPrice}</span>
                  <span className="ml-3 text-xl font-medium tracking-normal text-gray-500">USD</span>
                </div>
                <p className="mt-4 text-sm">
                  <a href="#" className="font-medium text-gray-500 underline">
                    {numberOfPurchases} Purchases So Far!
                  </a>
                </p>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      onClick={handlePurchase}
                      data-plan="annual"
                      className="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900"
                    >
                      Grab an annual plan
                    </a>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <Link href={Routes.ProfilePage()} passHref className="font-medium text-gray-900">
                    <a target="_blank" rel="noreferrer noopener">See sample garden</a>

                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Lifetime Plan</h3>
                <p className="mt-6 text-base text-gray-500">
                  Lifetime plan is available for $500. Get a custom highlight video compiled from your content to feature in your garden.
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 bg-white pr-4 text-base font-semibold text-indigo-600">
                      What&apos;s included
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul role="list" className="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0">
                    {lifetimeBonuses.map((feature) => (
                      <li key={feature} className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg font-medium leading-6 text-gray-900">Pay once for lifetime access!</p>
                <div className="mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900">
                  <span>$500</span>
                  <span className="ml-3 text-xl font-medium tracking-normal text-gray-500">USD</span>
                </div>
                <p className="mt-4 text-sm">
                  <a href="#" className="font-medium text-gray-500 underline">
                    {remainingLifetime} lifetime deals remaining!
                  </a>
                </p>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      onClick={handlePurchase}
                      data-plan="lifetime"
                      className="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900"
                    >
                      Lock in lifetime deal
                    </a>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <Link href={Routes.ProfilePage()} passHref className="font-medium text-gray-900">
                    <a target="_blank" rel="noreferrer noopener">See sample garden</a>

                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Pricing
