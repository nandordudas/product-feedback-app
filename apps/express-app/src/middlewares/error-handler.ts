import { invoke, isError, makeSafe } from '@product-feedback-app/utils'
import type { ErrorRequestHandler } from 'express'

import { ResponseError } from '~/errors'

export function errorHandler(): ErrorRequestHandler {
  return (error, request, response, next) => {
    if (response.headersSent)
      return next(new ResponseError('serverError'))

    let message: string | unknown = isError(error) ? error.message : 'Something went wrong'
    const statusCode = Number(error?.statusCode) || 500

    console.error(`[${request.method} ${request.url}]: (${statusCode}) ${message}`)

    const result = invoke(makeSafe(() => JSON.parse(String(message))))

    if (result.ok)
      message = result.value

    response
      .status(statusCode)
      .json({ statusCode, error: message })
  }
}
