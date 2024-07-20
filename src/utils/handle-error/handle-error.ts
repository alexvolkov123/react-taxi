import { AxiosError, AxiosResponse } from 'axios';

export const handleError = (error: AxiosResponse<AxiosError>) => {
    const message = error.data.message;

    return message;
};
