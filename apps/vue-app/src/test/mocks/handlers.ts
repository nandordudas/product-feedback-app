import type { User } from '@product-feedback-app/database'
import { rest } from 'msw'

const PRODUCTS_URL = 'http://localhost:3001/api/v1'

export const handlers = [
  rest.get(PRODUCTS_URL, async (req, res, ctx) => {
    const productId = req.url.searchParams.get('id')

    if (!productId) {
      return res(
        ctx.status(200),
        ctx.json({ data: [] }),
      )
    }

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
