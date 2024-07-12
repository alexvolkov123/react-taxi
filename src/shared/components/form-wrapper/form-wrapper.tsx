import { PropsWithChildren } from 'react'

import './form-wrapper.scss'
import { FormWrapperProps } from './form-wrapper.types'

export const FormWrapper = ({
  onSubmit,
  children,
}: PropsWithChildren<FormWrapperProps>) => {
  return (
    <form onSubmit={onSubmit} className='form-wrapper'>
      {children}
    </form>
  )
}
