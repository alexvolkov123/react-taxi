import { Close } from '@mui/icons-material'
import { IconButton, TextField, Typography } from '@mui/material'
import { useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { formConfig } from '../../../configs'
import { useActions, useTypedSelector } from '../../../hooks'
import { AuthButton, emailValidation } from '../../../shared'
import { useResetPasswordMutation } from '../../../store'
import { notify } from '../../../utils/notify'
import './reset-password.scss'
import { ResetPasswordRequest } from './reset-password.types'

export const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ResetPasswordRequest>(formConfig)

  const [resetPassword] = useResetPasswordMutation()
  const { toggleLoading, toggleOpenResetPassword } = useActions()
  const { isOpenResetPassword } = useTypedSelector(state => state.resetPassword)

  const handleOnSubmit: SubmitHandler<ResetPasswordRequest> = useCallback(
    (data: ResetPasswordRequest) => {
      toggleLoading()
      resetPassword(data)
        .then(() => {
          toggleLoading()
          notify(
            `We have successfully sent a password reset
							 link to your email address.`
          )
        })
        .catch(() => {
          toggleLoading()
          notify(
            `We were unable to send a link 
							to your email address`,
            'error'
          )
        })
      toggleOpenResetPassword()
      reset()
    },
    [reset, resetPassword, toggleLoading, toggleOpenResetPassword]
  )

  return (
    <>
      {isOpenResetPassword && (
        <div className='reset-password'>
          <IconButton onClick={() => toggleOpenResetPassword()} className='modal'>
            <Close />
          </IconButton>
          <Typography width={500} fontSize={18}>
            We need to know your email to send the link to reset you password.
          </Typography>
          <form onSubmit={handleSubmit(handleOnSubmit)} className='reset-password__form'>
            <TextField
              {...register('email', emailValidation)}
              label='Email'
              variant='outlined'
              error={!!errors.email}
              helperText={errors.email?.message}
              className='auth'
            />

            <AuthButton label='Send' className='medium_auth' disabled={!isValid} />
          </form>
        </div>
      )}
    </>
  )
}
