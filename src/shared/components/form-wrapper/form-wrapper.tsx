import { Stack } from '@mui/material'
import { PropsWithChildren } from 'react'

import './form-wrapper.scss'
import { FormWrapperProps } from './form-wrapper.types'

export const FormWrapper = ({
  onSubmit,
  children,
  footer,
}: FormWrapperProps & PropsWithChildren) => {
  return (
    <>
      <form onSubmit={onSubmit} className='form-wrapper'>
        <Stack spacing={3}>{children}</Stack>
        {footer && footer}
      </form>
    </>
  )
}
