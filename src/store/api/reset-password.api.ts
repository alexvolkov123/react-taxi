import { UserEmail } from '../../types/types'
import { api } from './api'

export const resetPasswordApi = api.injectEndpoints({
	endpoints: builder => ({
		resetPassword: builder.mutation({
			query: (userEmail: UserEmail) => ({
				body: userEmail,
				url: '/resetPassword',
				method: 'POST',
			}),
		}),
	}),
})

export const { useResetPasswordMutation } = resetPasswordApi
