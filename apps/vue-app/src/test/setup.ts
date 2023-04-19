// Under Node.js 18 we need cross-fetch
import { fetch } from 'cross-fetch'
import 'cross-fetch/polyfill'

import { server } from './mocks/server'

beforeAll(() => {
  vi.stubGlobal('fetch', fetch)
  server.listen({ onUnhandledRequest: 'error' })
})

afterAll(() => {
  server.close()
  vi.unstubAllGlobals()
})

afterEach(() => {
  server.resetHandlers()
})
