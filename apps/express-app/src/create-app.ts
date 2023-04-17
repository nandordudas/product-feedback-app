import express, { type Router, json, urlencoded } from 'express'

import { ResponseError } from './errors'
import { catchAllRoutesHandler, errorHandler } from './middlewares'

const preHandlers = [
  /** ..., cors */
  json(),
  urlencoded({ extended: true }),
]

const postHandlers = [
  catchAllRoutesHandler(new ResponseError('notFound')),
  errorHandler(),
]

export const API_PREFIX = '/api'

export function createApp(prefix: string, routes: Router[]) {
  const app = express().disable('x-powered-by')

  app.use(preHandlers)
  app.use(prefix, routes)
  app.use(postHandlers)

  return app
}
