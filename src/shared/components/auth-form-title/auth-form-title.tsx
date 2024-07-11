import { Typography } from '@mui/material'

import { AuthFormTitleProps } from './auth-form-title.types'

export const AuthFormTitle = ({ title }: AuthFormTitleProps) => {
  return (
    <Typography fontSize={28} color='#fff' marginBottom={2} textAlign='center'>
      {title}
    </Typography>
  )
}
