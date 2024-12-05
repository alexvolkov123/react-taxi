import { ThemeProvider } from '@emotion/react';
import { RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';
import { router } from './router';
import { store } from './store';
import { useTheme } from './theme';

export const App = () => {
    const theme = useTheme();

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </Provider>
    );
};
