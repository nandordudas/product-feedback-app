import type { Prisma } from '@prisma/client'

import { prisma } from '~/prisma'

export function createUser(user: Prisma.UserCreateInput) {
  return prisma.user.create({
    data: user,
  })
}
