import { Stack, TextField } from '@mui/material';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { formConfig } from '../../../configs';

import { useActions } from '../../../hooks';
import { AuthButton, AuthFormWrapper, PasswordInput, RoleSelect } from '../../../shared/components';
import { RegisterUserData, UserRolesEnum } from '../../../shared/types';
import { emailValidation, passwordValidation, requiredFieldValidation } from '../../../shared/validations';
import { useRegisterUserMutation } from '../../../store';
import { handleError, notify } from '../../../utils';
import { CarForm } from './car-form';

const defaultValues: RegisterUserData = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    role: 'client',
    car: undefined,
};

export const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        resetField,
        watch,
        trigger,
        formState: { errors, isValid, dirtyFields },
    } = useForm<RegisterUserData>({ ...formConfig, defaultValues });

    const [registerUser] = useRegisterUserMutation();
    const { setLoading } = useActions();

    const onSubmit: SubmitHandler<RegisterUserData> = useCallback(
        async (data: RegisterUserData) => {
            const { car, confirmPassword, ...dataUser } = data;
            setLoading(true);
            try {
                await registerUser(dataUser).unwrap();
                notify('You are registered');
            } catch (error: any) {
                notify(handleError(error), 'error');
            }
            setLoading(false);

            reset();
        },
        [registerUser, reset, setLoading],
    );

    const passwordFieldValue = watch('password');

    useEffect(() => {
        dirtyFields.confirmPassword && trigger('confirmPassword');
    }, [dirtyFields.confirmPassword, passwordFieldValue, trigger]);

    const selectItems = useMemo(
        () => [
            { label: 'Client', value: UserRolesEnum.client },
            { label: 'Driver', value: UserRolesEnum.driver },
        ],
        [],
    );
    const [selectedRole, setSelectedRole] = useState('');

    const onChangeRole = useCallback(
        (value: string) => {
            setSelectedRole(value as UserRolesEnum);

            resetField('car');
        },
        [resetField],
    );

    return (
        <AuthFormWrapper onSubmit={handleSubmit(onSubmit)}>
            <Stack direction='row' spacing={3} marginBottom={3} display='flex' alignItems='flex-end'>
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
                                        return 'Password doesn`t match';
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
                        {...register('firstName', requiredFieldValidation('First name'))}
                        label='First name'
                        variant='outlined'
                        error={!!errors.firstName}
                        helperText={errors.firstName?.message}
                        className='auth'
                    />
                    <TextField
                        {...register('lastName', requiredFieldValidation('Last name'))}
                        label='Last name'
                        variant='outlined'
                        error={!!errors.lastName}
                        helperText={errors.lastName?.message}
                        className='auth'
                    />
                    <RoleSelect
                        {...{
                            inputProps: {
                                register: register('role', requiredFieldValidation('Role')),
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

                {selectedRole === UserRolesEnum.driver && <CarForm {...{ register, errors }} />}
            </Stack>
            <AuthButton label='register' disabled={!isValid} className='auth' />
        </AuthFormWrapper>
    );
};
