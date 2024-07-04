import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
}

export const loadingSlice = createSlice({
	name: 'loading',
	initialState,
	reducers: {
		toggleLoading: state => {
			state.isLoading = !state.isLoading
		},
	},
})

export const { actions: loadingActions, reducer: loadingReducer } = loadingSlice
