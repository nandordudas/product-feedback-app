import type { Request } from 'express'
import { type AnyZodObject, ZodError, type z } from 'zod'

import { invoke, isInstance, makeSafe } from '@product-feedback-app/utils'

import { ResponseError } from '~/errors'

export async function validateRequest<T extends AnyZodObject>(
  request: Request<any, any, any, any>,
  schema: T,
): Promise<z.infer<T>> {
  if (request.path === '/favicon.ico')
    return {} as T

  const result = invoke(makeSafe(() => schema.parseAsync(request)))

  if (!result.ok) {
    const errorMessage = isInstance(result.error, ZodError)
      ? result.error.message
      : JSON.stringify(result.error)

    throw new ResponseError('serverError', errorMessage)
  }

  return result.value
}
