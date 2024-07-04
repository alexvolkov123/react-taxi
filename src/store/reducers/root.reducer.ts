import { combineReducers } from '@reduxjs/toolkit'

import { api } from '../api/api'
import { loadingReducer } from '../slices/loading.slice'

export const rootReducer = combineReducers({
	loading: loadingReducer,
	[api.reducerPath]: api.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
