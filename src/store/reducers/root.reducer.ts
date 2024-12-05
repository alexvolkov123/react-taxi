import { combineReducers } from '@reduxjs/toolkit'

import { api } from '../api/api'
import { authReducer, loadingReducer, resetPasswordReducer } from '../slices'

export const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  resetPassword: resetPasswordReducer,
  [api.reducerPath]: api.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
