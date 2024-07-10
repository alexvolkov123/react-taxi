import { TextField } from '@mui/material'
import { useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { formConfig } from '../../../configs'
import { AuthButton, CheckboxInput, FormWrapper, PasswordInput } from '../../../shared/components'
import { LoginUserData } from '../../../shared/types'
import { emailValidation, passwordValidation } from '../../../shared/validations'
import { SignInFooter } from '../sign-in-footer'

const defaultValues = {
  email: '',
  password: '',
}

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<LoginUserData>({ ...formConfig, defaultValues })

  const onSubmit: SubmitHandler<LoginUserData> = useCallback(
    (data: LoginUserData): void => {
      reset()
    },
    [reset]
  )

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)} footer={<SignInFooter />}>
      <TextField
        {...register('email', emailValidation)}
        label='Email'
        variant='outlined'
        error={!!errors.email}
        helperText={errors.email?.message}
        className='auth'
      />
      <PasswordInput>
        <TextField
          {...register('password', passwordValidation)}
          label='Password'
          variant='outlined'
          error={!!errors.password}
          helperText={errors.password?.message}
          className='auth'
        />
      </PasswordInput>

      <CheckboxInput onChange={value => {}} label='Keep me logged in' />

      <AuthButton label='login' disabled={!isValid} className='auth' />
    </FormWrapper>
  )
}
