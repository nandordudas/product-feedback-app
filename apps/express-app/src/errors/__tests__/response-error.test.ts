import { ResponseError } from '../response-error'

describe('ResponseError', () => {
  it('should create custom error', () => {
    const error = new ResponseError('notFound')

    expect(error.name).toBe('ResponseError')
    expect(error.message).toBe('Page not found')
  })
})
