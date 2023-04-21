import { invoke } from '../helpers'

const mockResult = 'result'

vi.mock('../helpers', () => ({
  invoke: vi.fn<Parameters<typeof invoke>>(fn => fn()),
}))

describe('helpers', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  const mockFunction = vi.fn(() => mockResult)

  it('should invoke function', () => {
    const result = invoke(mockFunction)

    expect(result).toEqual(mockResult)
    expect(invoke).toHaveBeenCalled()
    expect(mockFunction).toHaveBeenCalled()
  })
})
