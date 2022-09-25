import { SecurePassword } from "@blitzjs/auth"
import { resolver } from "@blitzjs/rpc"
import db, {GlobalRole } from "db"
import { Role } from "types"
import { Signup } from "../validations"

export default resolver.pipe(resolver.zod(Signup), async ({ email, password, organizationName }, ctx) => {
  const hashedPassword = await SecurePassword.hash(password.trim())
  const user = await db.user.create({
    data: { email: email.toLowerCase().trim(), hashedPassword, role: GlobalRole.CUSTOMER, memberships: {
        create: {
          role: "OWNER",
          organization: {
            create: {
              name: organizationName,
            },
          },
        },
      },
    },
    select: { id: true, name: true, email: true, role: true },
  })

  await ctx.session.$create({ userId: user.id, roles: [user.role as Role] })
  return user
})
