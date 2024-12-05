import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    isOpenResetPassword: false,
};

export const resetPasswordSlice = createSlice({
    name: 'resetPassword',
    initialState,
    reducers: {
        setOpenResetPassword: (state, { payload }: PayloadAction<boolean>) => {
            state.isOpenResetPassword = payload;
        },
    },
});

export const { actions: resetPasswordActions, reducer: resetPasswordReducer } = resetPasswordSlice;
