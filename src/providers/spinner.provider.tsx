import { PropsWithChildren } from 'react';

import { useTypedSelector } from '../hooks';
import { Spinner } from '../shared/components';
import { loadingSelector } from '../store';

export const SpinnerProvider = ({ children }: PropsWithChildren) => {
    const { isLoading } = useTypedSelector(loadingSelector);

    return (
        <>
            {children}
            {isLoading && <Spinner />}
        </>
    );
};
