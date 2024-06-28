import { RouteObject } from 'react-router-dom'

import { SignInComponent } from '../../components/sign-in/sign-in'
import { RoutePathsEnum } from './types'

export const routes: RouteObject[] = [
	{
		path: RoutePathsEnum.root,
		element: <SignInComponent />,
	},
]
