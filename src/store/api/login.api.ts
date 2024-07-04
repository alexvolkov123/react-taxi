import { LoginRequest, LoginResponse } from '../../types/types'
import { api } from './api'

export const loginApi = api.injectEndpoints({
	endpoints: builder => ({
		login: builder.mutation<LoginResponse, LoginRequest>({
			query: user => ({
				body: user,
				url: '/login',
				method: 'POST',
			}),
		}),
	}),
})

export const { useLoginMutation } = loginApi
