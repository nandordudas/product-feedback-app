import type { Router } from 'express'

import { createApp } from './create-app'
import { V1_ROUTER } from './routes'

const routes: Router[] = [
  V1_ROUTER,
  // Add new routers here.
]

export function createServer({ host, port }: { host: string; port: number }) {
  const server = createApp(routes).listen(port, host, () => {
    // eslint-disable-next-line no-console
    console.log(`⚡Server started on port http://${host}:${port}/`)
  })

  return server
}
