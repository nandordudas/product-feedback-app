import { isError } from '..'

describe('is', () => {
  it('should check error type', () => {
    const error = new Error('test')

    expect(isError(error)).toBeTruthy()
  })
})
