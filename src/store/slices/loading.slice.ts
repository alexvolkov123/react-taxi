import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, { payload: isLoading }) => {
      state.isLoading = isLoading
    },
  },
})

export const { actions: loadingActions, reducer: loadingReducer } = loadingSlice
