import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment } from '@mui/material'
import { PropsWithChildren, useMemo, useState } from 'react'

export const PasswordInput = ({ children }: PropsWithChildren<any>) => {
  const [showPassword, setShowPassword] = useState(false)

  const inputWithPasswordProps = useMemo(() => {
    const typeValue = showPassword ? 'text' : 'password'
    const inputProps = {
      endAdornment: (
        <InputAdornment position='end'>
          <IconButton
            aria-label='toggle password visibility'
            onClick={() => setShowPassword(prev => !prev)}
            edge='end'
          >
            {showPassword ? <Visibility color='primary' /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      ),
    }

    let passwordInput = {
      ...children,
      props: { ...children.props, type: typeValue, InputProps: inputProps },
    }

    return passwordInput
  }, [children, showPassword])

  return <>{inputWithPasswordProps}</>
}
