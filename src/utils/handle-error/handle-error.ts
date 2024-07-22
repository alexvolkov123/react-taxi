import { AxiosError, AxiosResponse } from 'axios';

export const handleError = (error: AxiosResponse<AxiosError>) => {
    let message = 'Something went wrong with the server';

    message = error.data.message && error.data.message;

    return message;
};
