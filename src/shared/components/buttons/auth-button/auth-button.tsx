import { Button } from '@mui/material'

import { AuthButtonProps } from './auth-button.types'

export const AuthButton = ({ label, disabled, className = 'auth' }: AuthButtonProps) => {
  return (
    <Button disabled={disabled} className={className} type='submit'>
      {label}
    </Button>
  )
}
