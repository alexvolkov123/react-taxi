import { LoginResponse, LoginUserData } from '../../shared/types'
import { api } from './api'

export const loginApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<LoginResponse, LoginUserData>({
      query: user => ({
        body: user,
        url: '/login',
        method: 'POST',
      }),
    }),
  }),
})

export const { useLoginMutation } = loginApi
