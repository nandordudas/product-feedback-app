import type { FeedbackCategory, FeedbackStatus, FeedbackUserUpvote, Prisma } from '@prisma/client'

import { prisma } from '~/prisma'

// TODO: create repository

export function createFeedback(feedback: Prisma.FeedbackCreateInput) {
  return prisma.feedback.create({
    data: feedback,
  })
}

export function createFeedbackCategory(category: Prisma.FeedbackCategoryCreateInput) {
  return prisma.feedbackCategory.create({
    data: category,
  })
}

export function addCommentToFeedback({ where, comment }: {
  where: Prisma.FeedbackWhereUniqueInput
  comment: Prisma.CommentCreateWithoutFeedbackInput
}) {
  return prisma.feedback.update({
    where,
    data: {
      comment: {
        create: comment,
      },
    },
  })
}

export function findFeedback(feedback: Prisma.FeedbackWhereUniqueInput) {
  return prisma.feedback.findFirstOrThrow({
    where: feedback,
  })
}

export function findFeedbacks() {
  return prisma.feedback.findMany()
}

export function updateFeedback({ data, where }: {
  where: Prisma.FeedbackWhereUniqueInput
  data: Prisma.FeedbackUpdateInput
}) {
  return prisma.feedback.update({
    where,
    data,
  })
}

export function updateFeedbackComment({ comment, where }: {
  where: Prisma.FeedbackWhereUniqueInput
  comment: Prisma.CommentUpdateInput
}) {
  return prisma.feedback.update({
    where,
    data: comment,
  })
}

export function updateFeedbackStatus({ status, where }: {
  where: Prisma.FeedbackWhereUniqueInput
  status: FeedbackStatus
}) {
  return updateFeedback({
    where,
    data: {
      status,
    },
  })
}

// TODO: may change to catergory instead
export function updateFeedbackCategory({ categoryId, where }: {
  where: Prisma.FeedbackWhereUniqueInput
  categoryId: FeedbackCategory['id']
}) {
  return prisma.feedback.update({
    where,
    data: {
      category: {
        update: {
          id: categoryId,
        },
      },
    },
  })
}

// TODO: check Prisma validator
export function changeFeedbackUpvote({ feedbackUserUpvote, hasUpvote }: {
  feedbackUserUpvote: FeedbackUserUpvote
  hasUpvote: FeedbackUserUpvote['hasUpvote']
}) {
  return prisma.feedbackUserUpvote.update({
    where: {
      userId_feedbackId_hasUpvote: {
        ...feedbackUserUpvote,
      },
    },
    data: {
      hasUpvote,
    },
  })
}

export function deleteFeedback(feedback: Prisma.FeedbackWhereUniqueInput) {
  return prisma.feedback.delete({
    where: feedback,
  })
}
