import { createBrowserRouter } from 'react-router-dom';

import { SignIn } from '../pages';
import { Layout } from '../shared';
import { RoutePathsEnum } from './router.types';

export const router = createBrowserRouter([
    {
        path: RoutePathsEnum.root,
        element: <Layout />,
        children: [
            {
                path: RoutePathsEnum.signIn,
                element: <SignIn />,
            },
        ],
    },
]);
