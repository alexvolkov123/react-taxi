import { RouteObject } from 'react-router-dom'

import { SignIn } from '../../pages'
<<<<<<< HEAD
import { Layout } from '../../shared/components'
=======
import { Layout } from '../../shared'
>>>>>>> a6e4a9831b87c918d79168697b5334a6fa00911c
import { RoutePathsEnum } from './routes.types'

export const routes: RouteObject[] = [
  {
    path: RoutePathsEnum.root,
    element: (
      <Layout>
        <SignIn />
      </Layout>
    ),
  },
]
