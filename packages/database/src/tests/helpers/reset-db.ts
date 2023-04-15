import { prisma } from '~/prisma'

export function resetDb() {
  return prisma.$transaction([
    prisma.comment.deleteMany(),
    prisma.feedback.deleteMany(),
    prisma.feedbackCategory.deleteMany(),
    prisma.user.deleteMany(),
  ])
}
