import type { Prisma, User } from '@prisma/client'
import { faker } from '@faker-js/faker'

import { prisma } from '~/prisma'
import { createUser } from '~/scripts/user'

vi.mock('~/prisma')

describe('User', () => {
  describe('createUser', () => {
    const email = faker.internet.email()
    const userName = faker.internet.userName()

    it('should throw an error when called with invalid data', () => {
      const errorMessage = 'Invalid user data'

      vi.mocked(prisma.user.create).mockRejectedValue(new Error(errorMessage))

      expect(() => createUser({} as Prisma.UserCreateInput)).rejects.toThrowError(errorMessage)
    })

    it('should create a user and return it when called with valid data', async () => {
      const mockUser: Prisma.UserCreateInput = {
        email,
        name: faker.name.fullName(),
        password: faker.internet.password(),
        userName,
      }

      vi.mocked(prisma.user.create).mockResolvedValue(mockUser as User)

      const user = await createUser(mockUser)

      expect(user).toStrictEqual(mockUser)
    })

    it('should throw an error when called with existing field value', () => {
      let errorMessage = 'Email already exists'

      const mockUser: Prisma.UserCreateInput = {
        email,
        name: faker.name.fullName(),
        password: faker.internet.password(),
        userName,
      }

      vi.mocked(prisma.user.create).mockRejectedValueOnce(new Error(errorMessage))

      expect(() => createUser({
        ...mockUser,
        userName: faker.internet.userName(),
      })).rejects.toThrowError(errorMessage)

      errorMessage = 'Username already exists'

      vi.mocked(prisma.user.create).mockRejectedValueOnce(new Error(errorMessage))

      expect(() => createUser({
        ...mockUser,
        email: faker.internet.email(),
      })).rejects.toThrowError(errorMessage)
    })
  })
})
