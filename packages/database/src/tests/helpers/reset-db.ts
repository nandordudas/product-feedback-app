import type { Prisma } from '@prisma/client'

import { prisma } from '~/prisma'

export function resetDb() {
  const transactions: Prisma.PrismaPromise<Prisma.BatchPayload>[] = [
    prisma.comment.deleteMany(),
    prisma.feedback.deleteMany(),
    prisma.feedbackCategory.deleteMany(),
    prisma.feedbackUserUpvote.deleteMany(),
    prisma.user.deleteMany(),
  ]

  return prisma.$transaction(transactions)
}
