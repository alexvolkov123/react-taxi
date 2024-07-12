import { Stack, TextField } from '@mui/material'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { formConfig } from '../../../configs'

import {
  AuthButton,
  FormWrapper,
  PasswordInput,
  RoleSelect,
} from '../../../shared/components'
import { RegisterUserData, UserRolesEnum } from '../../../shared/types'
import {
  emailValidation,
  passwordValidation,
} from '../../../shared/validations'
import { CarForm } from './car-form'

const defaultValues: RegisterUserData = {
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
  role: 'client',
  car: null,
}

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    resetField,
    watch,
    trigger,
    formState: { errors, isValid, dirtyFields },
  } = useForm<RegisterUserData>({ ...formConfig, defaultValues })

  const selectItems = useMemo(
    () => [
      { label: 'Client', value: UserRolesEnum.client },
      { label: 'Driver', value: UserRolesEnum.driver },
    ],
    []
  )
  const [selectedRole, setSelectedRole] = useState('')

  const onChangeRole = useCallback(
    (value: string) => {
      setSelectedRole(value as UserRolesEnum)
      resetField('car')
    },
    [resetField]
  )

  const onSubmit: SubmitHandler<RegisterUserData> = useCallback(
    (data: RegisterUserData) => {
      reset()
    },
    [reset]
  )

  useEffect(() => {
    dirtyFields.confirmPassword && trigger('confirmPassword')
  }, [dirtyFields.confirmPassword, watch('password'), trigger])

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Stack
        direction='row'
        spacing={3}
        marginBottom={3}
        display='flex'
        alignItems='flex-end'
      >
        <Stack spacing={3}>
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
          <PasswordInput>
            <TextField
              {...register('confirmPassword', {
                ...passwordValidation,
                validate: (value, formValues) => {
                  if (formValues.password !== value) {
                    return 'Passwords doesn`t match'
                  }
                },
              })}
              label='Confirm password'
              variant='outlined'
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              className='auth'
            />
          </PasswordInput>
          <TextField
            {...register('firstName', { required: 'This field is required' })}
            label='First name'
            variant='outlined'
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
            className='auth'
          />
          <TextField
            {...register('lastName', { required: 'This field is required' })}
            label='Last name'
            variant='outlined'
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
            className='auth'
          />
          <RoleSelect
            {...{
              inputProps: {
                register: register('role', { required: 'Role is required' }),
                error: !!errors.role,
                errorMessage: errors.role?.message,
              },
              baseSelectProps: {
                items: selectItems,
                selectedItem: selectedRole,
                onChange: onChangeRole,
              },
            }}
          />
        </Stack>

        {selectedRole === UserRolesEnum.driver && (
          <CarForm register={register} errors={errors} />
        )}
      </Stack>
      <AuthButton label='register' disabled={!isValid} className='auth' />
    </FormWrapper>
  )
}
