import { Stack, TextField, Typography } from '@mui/material'
import { useCallback, useMemo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { formConfig } from '../../../configs'

import {
  AuthButton,
  BaseSelect,
  FormWrapper,
  PasswordInput,
} from '../../../shared/components'
import { RegisterUserData, UserRolesEnum } from '../../../shared/types'
import {
  emailValidation,
  passwordValidation,
} from '../../../shared/validations'
import { baseSelectMenuSettings } from '../../../theme'

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
    formState: { errors, isValid },
  } = useForm<RegisterUserData>({ ...formConfig, defaultValues })

  const selectItems = useMemo(
    () => [UserRolesEnum.client, UserRolesEnum.driver],
    []
  )
  const [selectedRole, setSelectedRole] = useState(UserRolesEnum.client)

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
              {...register('confirmPassword', passwordValidation)}
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
          <BaseSelect
            items={selectItems}
            selectedItem={selectedRole}
            menuProps={baseSelectMenuSettings}
            onChange={onChangeRole}
          />
        </Stack>

        {selectedRole === UserRolesEnum.driver && (
          <Stack spacing={3}>
            <Typography fontSize={25} marginLeft={2}>
              Car
            </Typography>
            <TextField
              {...register('car.make', { required: 'This field is required' })}
              label='Make'
              variant='outlined'
              error={!!errors.car?.make}
              helperText={errors.car?.make?.message}
              className='auth'
            />
            <TextField
              {...register('car.model', { required: 'This field is required' })}
              label='Model'
              variant='outlined'
              error={!!errors.car?.model}
              helperText={errors.car?.model?.message}
              className='auth'
            />
            <TextField
              {...register('car.year', { required: 'This field is required' })}
              label='Year'
              variant='outlined'
              error={!!errors.car?.year}
              helperText={errors.car?.year?.message}
              className='auth'
            />
            <TextField
              {...register('car.color', { required: 'This field is required' })}
              label='Color'
              variant='outlined'
              error={!!errors.car?.color}
              helperText={errors.car?.color?.message}
              className='auth'
            />
          </Stack>
        )}
      </Stack>
      <AuthButton label='register' disabled={!isValid} className='auth' />
    </FormWrapper>
  )
}
