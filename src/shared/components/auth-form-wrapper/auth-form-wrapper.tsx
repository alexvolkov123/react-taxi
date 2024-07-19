import { Stack } from '@mui/material';
import { PropsWithChildren } from 'react';

import './auth-form-wrapper.scss';
import { AuthFormWrapperProps } from './auth-form-wrapper.types';

export const AuthFormWrapper = ({ onSubmit, children, footer }: PropsWithChildren<AuthFormWrapperProps>) => {
    return (
        <form onSubmit={onSubmit} className='auth-form-wrapper'>
            <Stack spacing={3}>{children}</Stack>
            {footer && footer}
        </form>
    );
};
