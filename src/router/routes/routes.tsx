import { RouteObject } from 'react-router-dom';

import { SignIn } from '../../pages';
import { RoutePathsEnum } from './routes.types';

export const routes: RouteObject[] = [
  {
    path: RoutePathsEnum.root,
    element: <SignIn />,
  },
];
