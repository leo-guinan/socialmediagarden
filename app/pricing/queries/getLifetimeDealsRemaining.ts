import { Ctx } from "blitz"
import db, {Interval} from "db"

export default async function getLifetimeDealsRemaining(_ = null) {

  const organizations = await db.organization.findMany({
    where: {
      plan: {
        interval: Interval.LIFETIME
      }
    }
  })

  return 10 - organizations.length
}
