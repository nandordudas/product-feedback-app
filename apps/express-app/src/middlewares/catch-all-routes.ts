import type { RequestHandler } from 'express'

export function catchAllRoutesHandler(error: unknown): RequestHandler {
  return (_request, _response, next) => {
    next(error)
  }
}
