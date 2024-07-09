import { ResetPasswordRequest } from '../../pages/sign-in/reset-password'
import { api } from './api'

export const resetPasswordApi = api.injectEndpoints({
  endpoints: builder => ({
    resetPassword: builder.mutation({
      query: (userEmail: ResetPasswordRequest) => ({
        body: userEmail,
        url: '/resetPassword',
        method: 'POST',
      }),
    }),
  }),
})

export const { useResetPasswordMutation } = resetPasswordApi
