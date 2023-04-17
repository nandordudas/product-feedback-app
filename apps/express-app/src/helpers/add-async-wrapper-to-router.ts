import type { RequestHandler, Router } from 'express'
import type { ServerHandle, ServerStackItem } from 'connect'

import { isAsyncFunction } from '@product-feedback-app/utils'

import { asyncWrapper } from './async-wrapper'

export function addAsyncWrapperToRouter(router: Router): Router {
  router.stack.forEach((layer) => {
    if (!layer.route)
      return

    layer.route.stack.forEach((middleware: ServerStackItem) => {
      if (!isAsyncFunction(middleware.handle))
        return

      const handler = asyncWrapper(middleware.handle as RequestHandler)

      middleware.handle = handler as ServerHandle
    })
  })

  return router
}
