import { Box, Link } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { RoutePathsEnum } from '../../../router/routes/types'
import { ForgetPassword } from './forget-password/forget-password'

export const SignInFooter = () => {
	const navigate = useNavigate()
	const [openForgetPassword, setOpenForgetPassword] = useState(false)

	const toggleOpenForgetPassword = () => setOpenForgetPassword(prev => !prev)

	const navigateToRegister = () => navigate(RoutePathsEnum.signUp)

	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Link onClick={toggleOpenForgetPassword} id='auth'>
				Forgot password?
			</Link>
			<Link onClick={navigateToRegister} id='auth'>
				I don’t have an account
			</Link>

			<ForgetPassword
				isOpen={openForgetPassword}
				onClose={toggleOpenForgetPassword}
			/>
		</Box>
	)
}
