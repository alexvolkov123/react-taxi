import { Navigate, RouteObject } from 'react-router-dom'

import { SignIn, SignUp } from '../../pages'
import { Layout } from '../../shared/components'
import { RoutePathsEnum } from './routes.types'

export const routes: RouteObject[] = [
  {
    path: RoutePathsEnum.root,
    element: <Navigate to={RoutePathsEnum.signIn} />,
  },
  {
    path: RoutePathsEnum.signIn,
    element: (
      <Layout>
        <SignIn />
      </Layout>
    ),
  },
  {
    path: RoutePathsEnum.signUp,
    element: (
      <Layout>
        <SignUp />
      </Layout>
    ),
  },
]
