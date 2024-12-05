import { Stack, TextField } from '@mui/material';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { formConfig } from '../../../configs';
import { useActions } from '../../../hooks';

import { AuthButton, AuthFormWrapper, CheckboxInput, PasswordInput } from '../../../shared';
import { LoginUserData } from '../../../shared/types';
import { emailValidation, passwordValidation } from '../../../shared/validations';
import { useLoginMutation } from '../../../store';
import { handleError, notify } from '../../../utils';
import { SignInFooter } from '../sign-in-footer';

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
    } = useForm<LoginUserData>({ ...formConfig, defaultValues });

    const [login] = useLoginMutation();
    const { setLoading, setCredentials } = useActions();

    const onSubmit = useCallback(
        async (data: LoginUserData) => {
            setLoading(true);
            try {
                const userInfo = await login(data).unwrap();
                setCredentials(userInfo);

                notify('You are logged in');
            } catch (error: any) {
                notify(handleError(error), 'error');
            }
            setLoading(false);
            reset();
        },
        [login, reset, setCredentials, setLoading],
    );

    return (
        <AuthFormWrapper onSubmit={handleSubmit(onSubmit)}>
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

                <CheckboxInput onChange={value => {}} label='Keep me logged in' />

                <AuthButton label='login' disabled={!isValid} className='auth' />
            </Stack>
            <SignInFooter />
        </AuthFormWrapper>
    );
};
