import { Router } from 'express'

import { homeRouter } from './home'
import { addAsyncWrapperToRouter } from '~/helpers'

const VERSION = '/v1'

export const V1_ROUTER = Router({
  caseSensitive: true,
  mergeParams: true,
  strict: true,
})

V1_ROUTER.use(VERSION, [
  homeRouter,
].map(addAsyncWrapperToRouter))
