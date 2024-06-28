import { memo, useMemo } from 'react'

import { User } from '../../types/types'
import { AuthForm } from '../auth-form/auth-form'
import { SignInInputValidations } from '../auth-form/validation/auth-validation'
import { InputType, SignInInputNamesType } from './types'

export const SignInComponent = memo(() => {
	const title = 'Sign In'
	const inputs: InputType<SignInInputNamesType>[] = useMemo(
		() => [
			{
				label: 'Email',
				name: 'email',
				type: 'text',
			},
			{
				label: 'Password',
				name: 'password',
				type: 'password',
			},
		],
		[]
	)
	const buttonLabel = 'Login'

	const onSubmit = () => {}

	return (
		<>
			<AuthForm<User, SignInInputNamesType>
				{...{
					title,
					inputs,
					validations: SignInInputValidations,
					onSubmit,
					buttonLabel,
				}}
			/>
		</>
	)
})
