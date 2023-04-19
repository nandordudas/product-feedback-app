import type { ErrorRequestHandler, RequestHandler, Router } from 'express'
import express, { json, urlencoded } from 'express'

import { ResponseError } from './errors'
import { catchAllRoutesHandler, errorHandler } from './middlewares'

const preHandlers: RequestHandler[] = [
  /** ..., cors */
  json(),
  urlencoded({ extended: true }),
]

const postHandlers: (RequestHandler | ErrorRequestHandler)[] = [
  catchAllRoutesHandler(new ResponseError('notFound')),
  errorHandler(),
]

export function createApp(routes: Router[]) {
  const app = express().disable('x-powered-by')

  app.use(preHandlers)
  app.use((_request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    response.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
  })
  app.use('/api', routes)
  app.use(postHandlers)

  return app
}
