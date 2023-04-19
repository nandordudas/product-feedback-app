import { makeSafe } from '..'

describe('make-safe', () => {
  const mockFunction = vi.fn(() => 'result')

  it('should make function safe', () => {
    let mockSafeFunction = makeSafe(() => mockFunction())
    let result = mockSafeFunction()

    expect(result.ok).toBeTruthy()

    if (result.ok)
      expect(result.value).toEqual('result')

    mockSafeFunction = makeSafe(() => {
      throw new Error('meh')
    })

    result = mockSafeFunction()

    expect(result.ok).not.toBeTruthy()

    if (!result.ok)
      expect(result.error.message).toEqual('meh')

    mockSafeFunction = makeSafe(() => {
      // eslint-disable-next-line no-throw-literal
      throw 'meh'
    })

    result = mockSafeFunction()

    expect(result.ok).not.toBeTruthy()

    if (!result.ok)
      expect(result.error.message).toEqual('Something went wrong')
  })
})
