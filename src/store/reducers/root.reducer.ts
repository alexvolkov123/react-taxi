import { combineReducers } from '@reduxjs/toolkit'

import { api } from '../api/api'
import { authReducer, loadingReducer } from '../slices'

export const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  [api.reducerPath]: api.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
