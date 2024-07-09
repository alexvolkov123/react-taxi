import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpenResetPassword: false,
}

export const resetPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState,
  reducers: {
    toggleOpenResetPassword: state => {
      state.isOpenResetPassword = !state.isOpenResetPassword
    },
  },
})

export const { actions: resetPasswordActions, reducer: resetPasswordReducer } = resetPasswordSlice
