import { configureStore } from '@reduxjs/toolkit'

import { api } from './api/api'
import { rootReducer } from './reducers/root.reducer'

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware),
})
