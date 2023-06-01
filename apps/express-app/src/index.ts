import { createServer } from './create-server'

main()

function main() {
  createServer({
    host: '0.0.0.0',
    port: 3000,
  })
}
