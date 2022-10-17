import { Ctx } from "blitz"
import db, { GlobalRole } from "db"

export default async function getAllUsers(_ = null, { session }: Ctx) {
  if (!session.userId) return null

  const currentUser = await db.user.findFirst({
    where: { id: session.userId as number }

  })
  if (!currentUser || currentUser.role !== GlobalRole.SUPERADMIN) return null
  console.log()
  const users = await db.user.findMany({
    include: {
      savedFeeds: true,
      memberships: {
        include: {
          organization: {
            include: {
              gardens: {
                include: {
                  featuredContent: true
                }
              }
            }
          }
        }
      }

    }
  })

  users.map(user => {
    user.memberships.map(membership => {
      membership.organization.gardens.map(garden => {
        console.log(garden.featuredContent)
      })
    })
  })

  return users
}
