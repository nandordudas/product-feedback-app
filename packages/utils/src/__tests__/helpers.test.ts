import { invoke } from '..'

describe('helpers', () => {
  const mockFunction = vi.fn(() => 'result')

  it('should invoke function', () => {
    const result = invoke(mockFunction)

    expect(result).toEqual('result')
    expect(mockFunction).toHaveBeenCalled()
  })
})
