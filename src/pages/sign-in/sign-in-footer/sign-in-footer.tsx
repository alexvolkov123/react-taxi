import { Box, Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { useActions } from '../../../hooks'
import { RoutePathsEnum } from '../../../router'

export const SignInFooter = () => {
  const navigate = useNavigate()
  const { toggleOpenResetPassword } = useActions()

  const navigateToRegister = () => navigate(RoutePathsEnum.signUp)

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Link onClick={() => toggleOpenResetPassword()} className='auth'>
        Forgot password?
      </Link>
      <Link onClick={navigateToRegister} className='auth'>
        I don’t have an account
      </Link>
    </Box>
  )
}
