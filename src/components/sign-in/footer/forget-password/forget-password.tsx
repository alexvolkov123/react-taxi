import { Close } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import { memo, useCallback, useMemo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useResetPasswordMutation } from '../../../../store/api/reset-password.api'
import { UserEmail } from '../../../../types/types'
import { formConfig } from '../../../../utils/form-config/form-config'
import { notify } from '../../../../utils/notify/notify'
import { SignInInputValidations } from '../../../auth-form/validation/auth-validation'
import { AuthButton } from '../../../ui/buttons/auth-button/auth-button'
import { FormInput } from '../../../ui/inputs/form-input/form-input'
import { ForgetPasswordProps } from './forget-password-props'
import './forget-password.scss'

export const ForgetPassword = memo(
	({ isOpen, onClose }: ForgetPasswordProps) => {
		const {
			register,
			handleSubmit,
			reset,
			formState: { errors, isValid },
		} = useForm<UserEmail>(formConfig)

		const [resetPassword] = useResetPasswordMutation()

		const handleOnSubmit: SubmitHandler<UserEmail> = useCallback(
			(data: UserEmail) => {
				resetPassword(data)
					.then(() => {
						notify(
							`We have successfully sent a password reset
							 link to your email address.`
						)
					})
					.catch(() => {
						notify(
							`We were unable to send a link 
							to your email address`,
							'error'
						)
					})
				onClose()
				reset()
			},
			[onClose, reset, resetPassword]
		)

		const input = useMemo(
			() => ({ label: 'Email', name: 'email' as 'email', type: 'text' }),
			[]
		)

		return (
			<div className='forgetPasswordModal' hidden={!isOpen}>
				<IconButton onClick={onClose} id='modal'>
					<Close />
				</IconButton>
				<Typography width={500} fontSize={18}>
					We need to know your email to send the link to reset you password.
				</Typography>
				<form
					onSubmit={handleSubmit(handleOnSubmit)}
					className='forgetPasswordModal__form'
				>
					<FormInput<UserEmail, 'email'>
						{...{
							register,
							input,
							validation: SignInInputValidations.email,
							errors,
							id: 'auth',
						}}
					></FormInput>

					<AuthButton label='Send' id='medium_auth' disabled={!isValid} />
				</form>
			</div>
		)
	}
)
