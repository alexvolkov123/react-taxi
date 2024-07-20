import { RootState } from '../reducers';

export const loadingSelector = (state: RootState) => state.loading;

export const authSelector = (state: RootState) => state.auth;
