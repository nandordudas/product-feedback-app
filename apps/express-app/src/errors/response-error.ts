const errorMap = {
  notFound: 404,
  serverError: 500,
} as const

type ErrorName = keyof typeof errorMap

const defaultMessages: Record<ErrorName, string> = {
  notFound: 'Page not found',
  serverError: 'Server error',
}

export class ResponseError extends Error {
  override name = 'ResponseError'
  readonly statusCode: number = errorMap.serverError

  constructor(type: ErrorName, message: string | null = null) {
    super(message ?? defaultMessages[type])

    Object.setPrototypeOf(this, new.target.prototype)

    this.statusCode = errorMap[type]

    Error.captureStackTrace(this, ResponseError)
  }
}
