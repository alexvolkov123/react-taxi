import { TextField } from '@mui/material';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { formConfig } from '../../../configs';
import { AuthButton, CheckboxInput, FormWrapper, PasswordInput } from '../../../shared/components';
import { LoginUser } from '../../../types/types';
import { emailValidation, passwordValidation } from '../../../utils/validations';

const defaultValues = {
  email: '',
  password: '',
};

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<LoginUser>({ ...formConfig, defaultValues });

  const onSubmit: SubmitHandler<LoginUser> = useCallback(
    (data: LoginUser): void => {
      reset();
    },
    [reset],
  );

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('email', emailValidation)}
        label='Email'
        variant='outlined'
        error={!!errors.email}
        helperText={errors.email?.message}
        id='auth'
      />
      <PasswordInput>
        <TextField
          {...register('password', passwordValidation)}
          label='Password'
          variant='outlined'
          error={!!errors.password}
          helperText={errors.password?.message}
          id='auth'
        />
      </PasswordInput>

      <CheckboxInput onChange={value => {}} label='Keep me logged in' />

      <AuthButton label='login' disabled={!isValid} id='auth' />
    </FormWrapper>
  );
};
