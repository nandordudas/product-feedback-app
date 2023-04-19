import { Router } from 'express'

import { addAsyncWrapperToRouter } from '~/helpers'

import { homeRouter } from './home'

const VERSION = '/v1'

const routes: Router[] = [
  homeRouter,
  // Add new routers here.
]

export const V1_ROUTER = Router({
  caseSensitive: true,
  mergeParams: true,
  strict: true,
})

V1_ROUTER.use(VERSION, routes.map(addAsyncWrapperToRouter))
