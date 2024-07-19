import { ReactElement } from 'react';

export type AuthFormWrapperProps = {
    onSubmit: () => void;
    footer?: ReactElement;
};
