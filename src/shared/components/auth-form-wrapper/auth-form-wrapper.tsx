import { PropsWithChildren } from 'react';

import './auth-form-wrapper.scss';
import { AuthFormWrapperProps } from './auth-form-wrapper.types';

export const AuthFormWrapper = ({ onSubmit, children }: PropsWithChildren<AuthFormWrapperProps>) => {
    return (
        <form onSubmit={onSubmit} className='auth-form-wrapper'>
            {children}
        </form>
    );
};
