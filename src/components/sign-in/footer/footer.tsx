import { Box, Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { RoutePathsEnum } from '../../../router/routes/types'

export const SignInFooter = () => {
	const navigate = useNavigate()

	const navigateToRegister = () => navigate(RoutePathsEnum.signUp)

	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Link onClick={() => {}} id='auth'>
				Forgot password?
			</Link>
			<Link onClick={navigateToRegister} id='auth'>
				I don’t have an account
			</Link>
		</Box>
	)
}
