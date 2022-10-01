import { Ctx } from "blitz"
import stripe, { env } from "integrations/stripe"
import db from "db"
import Stripe from "stripe"
import { Interval } from "../../../db"

type CreateCheckoutSessionInput = {
  priceId: string
  email: string
}

export default async function createCheckoutSession(
  { priceId, email }: CreateCheckoutSessionInput,
  ctx: Ctx
) {
  ctx.session.$authorize()

  let user = await db.user.findFirst({
    where: { id: ctx.session.userId },
    select: {
      email: true,
      memberships: {
        select: {
          organization: true
        }
      }
    }
  })
  console.log("user", user)

  if (!user) {
    throw new Error("User not found")
  }

  if (!user?.memberships[0]?.organization.stripeCustomerId) {
    const customer = await stripe.customers.create({
      email: user.email ? user.email : email
    })

    console.log("customer", customer)

    await db.organization.update({
      where: { id: user?.memberships[0]?.organization.id },
      data: {
        stripeCustomerId: customer.id
      }
    })
  }

  if (!user?.memberships[0]?.organization.stripeCustomerId) {
    throw new Error("Issue with stripe customer id.")
  }
  const lineItem = {
    price: priceId,
    quantity: 1
  }

  const params: Stripe.Checkout.SessionCreateParams = {
    customer: user?.memberships[0]?.organization.stripeCustomerId,
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [lineItem],
    success_url: `${env.DOMAIN}/presale?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${env.DOMAIN}/presale?cancel=true`,
  }
  if (priceId === process.env.NEXT_PUBLIC_ANNUAL_PRESALE) {
    const annualSubscriptions = await db.organization.findMany({
      where: {
        plan: {
          interval: Interval.ANNUAL
        }
      }
    })

    const numberOfAnnualSubscriptions = annualSubscriptions.length

    if (numberOfAnnualSubscriptions < 10) {
      params.discounts = [
        {
          coupon: process.env.NEXT_PUBLIC_EARLIEST_BIRD_COUPON,
        }
      ]
    } else if (numberOfAnnualSubscriptions < 20) {
      params.discounts = [
        {
          coupon: process.env.NEXT_PUBLIC_EARLIER_BIRD_COUPON,
        }
      ]
    } else if (numberOfAnnualSubscriptions < 30) {
      params.discounts = [
        {
          coupon: process.env.NEXT_PUBLIC_EARLY_BIRD_COUPON,
        }
      ]
    }
  }
  const session = await stripe.checkout.sessions.create(params)
  console.log("session", session)

  return {
    sessionId: session.id
  }

}
