import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
};

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.isLoading = payload;
        },
    },
});

export const { actions: loadingActions, reducer: loadingReducer } = loadingSlice;
