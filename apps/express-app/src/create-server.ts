import { createApp } from './create-app'

export function createServer({ host, port }: { host: string; port: number }) {
  const server = createApp().listen(port, host, () => {
    // eslint-disable-next-line no-console
    console.log(`⚡Server started on port http://${host}:${port}/`)
  })

  return server
}
