import { RegisterUserData } from '../../shared/types'
import { api } from './api'

export const registerApi = api.injectEndpoints({
  endpoints: builder => ({
    registerUser: builder.mutation<undefined, RegisterUserData>({
      query: user => ({
        body: user,
        url: '/register',
        method: 'POST',
      }),
    }),
  }),
})

export const { useRegisterUserMutation } = registerApi
