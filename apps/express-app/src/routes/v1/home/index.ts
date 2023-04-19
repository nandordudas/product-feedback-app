import { prisma } from '@product-feedback-app/database'
import { Router } from 'express'

import { validateRequest } from '~/helpers'

import type { ParamsSchema, QuerySchema, RequestSchema, ResponseSchema } from './shemas'
import { shemas } from './shemas'

export const homeRouter = Router()

homeRouter.get<'/:id?', ParamsSchema, ResponseSchema, RequestSchema, QuerySchema>(
  '/:id?',
  async (request, response) => {
    await validateRequest(request, shemas.request)

    const { params, query, body } = request

    console.error({ params, query, body })

    // Simulate error
    // await Promise.reject(new ResponseError('serverError'))

    const users = await prisma.user.findMany()

    response
      .status(200)
      .json({
        statusCode: 200,
        data: users,
      })
  })
