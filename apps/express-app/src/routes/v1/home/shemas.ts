import { z } from 'zod'
import { type User } from '@product-feedback-app/database'

const body = z.custom<{ key: string }>() // Just for example

export const shemas = {
  // { id?: string } => { id: number }
  get params() {
    return z.object({
      id: z.string().optional().transform(Number),
    })
  },
  // { statusCode: number, data: User[] }
  get response() {
    return z.object({
      statusCode: z.number(),
      data: z.custom<User[]>(),
    })
  },
  // { body: { key: string }, params: { id?: string }, query: { age: number, name: string } }
  get request() {
    return z.object({
      body,
      params: this.params,
      query: this.query,
    })
  },
  // { age: string, name: string }
  get query() {
    return z.object({
      age: z.string().optional().transform(Number),
      name: z.string().optional(),
    })
  },
}

export type ParamsSchema = z.output<typeof shemas.params>
export type ResponseSchema = z.output<typeof shemas.response>
export type RequestSchema = z.output<typeof shemas.request>
export type QuerySchema = z.output<typeof shemas.query>
