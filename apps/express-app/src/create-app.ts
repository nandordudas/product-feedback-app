import express, { json, urlencoded } from 'express'

import { ResponseError } from './errors'
import { catchAllRoutesHandler, errorHandler } from './middlewares'
import { V1_ROUTER } from './routes'

export function createApp() {
  const app = express()

  app.disable('x-powered-by')
  app.use(json(), urlencoded({ extended: true }) /** ..., cors */)
  app.use('/api', [V1_ROUTER])
  app.use(catchAllRoutesHandler(new ResponseError('notFound')), errorHandler())

  return app
}
