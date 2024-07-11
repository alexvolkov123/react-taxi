import { createSlice } from '@reduxjs/toolkit'

import { LoginResponse } from '../../shared/types'

const userTokens: LoginResponse | null = JSON.parse(localStorage.getItem('userTokens') || 'null')

const initialState = {
  userTokens,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload }: { payload: LoginResponse }) => {
      state.userTokens = payload
      localStorage.setItem('userTokens', JSON.stringify(payload))
    },
    logout: state => {
      state.userTokens = null
      localStorage.removeItem('userTokens')
    },
  },
})

export const { actions: authActions, reducer: authReducer } = authSlice
