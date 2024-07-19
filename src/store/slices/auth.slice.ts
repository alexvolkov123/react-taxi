import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { LoginResponse } from '../../shared/types'

const localStorageTokens = localStorage.getItem('userTokens')
const userTokens: LoginResponse | null = localStorageTokens ? JSON.parse(localStorageTokens) : null

const initialState = {
	userTokens,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (state, { payload }: PayloadAction<LoginResponse>) => {
			state.userTokens = payload
			localStorage.setItem('userTokens', JSON.stringify(payload))
		},
		deleteCredentials: state => {
			state.userTokens = null
			localStorage.removeItem('userTokens')
		},
	},
})

export const { actions: authActions, reducer: authReducer } = authSlice
