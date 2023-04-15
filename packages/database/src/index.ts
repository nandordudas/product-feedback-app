import { prisma } from './prisma'

async function main() {
  //
}

try {
  await main()
  await prisma.$disconnect()
}
catch (error) {
  console.error(error)
  await prisma.$disconnect()
  process.exit(1)
}
