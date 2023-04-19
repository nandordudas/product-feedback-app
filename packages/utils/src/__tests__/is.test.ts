import { isAsyncFunction, isError, isFunction, isInstance } from '..'

describe('is', () => {
  it('should check error type', () => {
    expect(isInstance(new Error('meh'), Error)).toBeTruthy()
  })

  it('should check error type', () => {
    const error = new Error('test')

    expect(isError(error)).toBeTruthy()
  })

  it('should check function type', () => {
    expect(isFunction(() => {})).toBeTruthy()
  })

  it('should check function type and is asynchronous', () => {
    expect(isAsyncFunction(async () => {})).toBeTruthy()
    expect(isAsyncFunction(0)).not.toBeTruthy()
  })
})
