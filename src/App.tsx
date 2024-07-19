import { ThemeProvider } from '@emotion/react';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { notifyProps } from './configs';
import { SpinnerProvider } from './providers';
import { router } from './router';
import { useTheme } from './theme';

export const App = () => {
    const { theme } = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <SpinnerProvider>
                <RouterProvider router={router} />
            </SpinnerProvider>

            <ToastContainer {...notifyProps} />
        </ThemeProvider>
    );
};
