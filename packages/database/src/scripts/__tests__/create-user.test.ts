import type { Prisma, User } from '@prisma/client'
import { faker } from '@faker-js/faker'

import { prisma } from '~/prisma'
import { createUser } from '~/scripts/create-user'

vi.mock('~/prisma')

describe('Create user', () => {
  it('should create user and return the generated user', async () => {
    const mockUser: Prisma.UserCreateInput = {
      email: faker.internet.email(),
      name: faker.name.fullName(),
      password: faker.internet.password(),
      user_name: faker.internet.userName(),
    }

    vi.mocked(prisma.user.create).mockResolvedValue(mockUser as User)

    const user = await createUser(mockUser)

    expect(user).toStrictEqual(mockUser)
  })
})
