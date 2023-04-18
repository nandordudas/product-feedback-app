import { rest } from 'msw'
import type { User } from '@product-feedback-app/database'

const PRODUCTS_URL = 'http://localhost:3001/api/v1'

export const handlers = [
  rest.get(PRODUCTS_URL, async (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [{
          id: 1,
          name: 'name',
          email: 'email',
          createdAt: new Date(),
          updatedAt: new Date(),
          password: 'password',
          userName: 'userName',
        }] as User[],
      }),
    )
  }),
]
