import { TextField } from '@mui/material'
import { useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { formConfig } from '../../../configs'
import { useActions } from '../../../hooks'
import { AuthButton, CheckboxInput, FormWrapper, PasswordInput } from '../../../shared/components'
import { LoginResponse, LoginUserData } from '../../../shared/types'
import { emailValidation, passwordValidation } from '../../../shared/validations'
import { useLoginMutation } from '../../../store'
import { notify } from '../../../utils'
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

  const [login] = useLoginMutation()
  const { toggleLoading } = useActions()

  const onSubmit: SubmitHandler<LoginUserData> = useCallback(
    async (data: LoginUserData): Promise<LoginResponse | void> => {
      try {
        toggleLoading()
        const tokens = await login(data).unwrap()

        notify('You are logged in')

        return tokens
      } catch {
        notify('Cannot find user with this email.', 'error')
      }
      toggleLoading()
      reset()
    },
    [login, reset, toggleLoading]
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
