import { Prisma } from '@prisma/client'

import { prisma } from '~/prisma'

// TODO: create repository

const userUniqueFields = Prisma.validator<Prisma.UserSelect>()({
  email: true,
  userName: true,
})

const update = {
  where: {
    feedbackUserUpvote: {
      feedbackId: 1,
      userId: 1,
      hasUpvote: true,
    },
  },
  data: { hasUpvote: false }, // remove vote,
}

prisma.user.update({
  where: { id: 1 },
  data: {
    FeedbackUserUpvote: { update },
  },
})

prisma.feedback.update({
  where: { id: 1 },
  data: {
    FeedbackUserUpvote: { update },
  },
  select: {
    _count: {
      select: {
        FeedbackUserUpvote: true,
      },
    },
  },
})

prisma.feedbackUserUpvote.update({
  where: update.where,
  data: {},
})

export function createUser(user: Prisma.UserCreateInput) {
  return prisma.user.create({
    data: user,
    select: userUniqueFields,
  })
}

export function findUser(user: Prisma.UserWhereInput) {
  return prisma.user.findFirstOrThrow({
    where: user,
  })
}

export function findUsers() {
  return prisma.user.findMany()
}

export function updateUser(user: Prisma.UserWhereUniqueInput) {
  return prisma.user.update({
    where: {
      id: Number(user.id),
    },
    data: user,
  })
}

export function deleteUser(user: Prisma.UserWhereUniqueInput) {
  return prisma.user.delete({
    where: user,
  })
}
