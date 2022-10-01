import { Ctx } from "blitz"
import db, {Interval} from "db"

export default async function getNumberOfPurchases(_ = null) {

  const organizations = await db.organization.findMany({
    where: {
      plan: {
        interval: Interval.ANNUAL
      }
    }
  })

  return organizations.length
}
