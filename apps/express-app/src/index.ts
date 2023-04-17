import { createServer } from './create-server'

function main() {
  createServer({
    host: '0.0.0.0',
    port: 3000,
  })
}

main()
