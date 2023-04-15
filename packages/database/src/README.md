# Prisma client

Add `DATABASE_URL` environment variable like

```ini
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

```bash
npx prisma init --datasource-provider postgresql
npx prisma migrate dev --name init
```

### Example

```ts
import { prisma } from './prisma'

export async function createUser(name: string) {
  const user = await prisma.user.create({
    data: {
      name,
      email: `${name.toLocaleLowerCase()}@prisma.io`,
    },
  })

  console.log(user)
}

export async function findUsers() {
  const users = await prisma.user.findMany()

  console.log(users)
}

export async function findUsersWithPost() {
  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })

  console.dir(usersWithPosts, { depth: null })
}

export async function createUserWithPost(name: string) {
  const user = await prisma.user.create({
    data: {
      name,
      email: `${name.toLocaleLowerCase()}@prisma.io`,
      posts: {
        create: {
          title: 'Hello World',
        },
      },
    },
  })

  console.log(user)
}

async function main() {
  await createUser('Alice')
  await createUserWithPost('Bob')
  await findUsers()
  await findUsersWithPost()
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
```
