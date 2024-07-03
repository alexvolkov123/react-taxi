import { memo, useMemo } from 'react'

import { User } from '../../types/types'
import { AuthForm } from '../auth-form/auth-form'
import { AuthFormTitle } from '../auth-form/auth-form-title/auth-form-title'
import { SignInInputValidations } from '../auth-form/validation/auth-validation'
import { CheckboxInput } from '../ui/inputs/checkbox/checkbox'
import { SignInFooter } from './footer/footer'
import './sign-in.scss'
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
		<div className='signIn'>
			<AuthFormTitle {...{ title }} />
			<AuthForm<User, SignInInputNamesType>
				{...{
					title,
					inputs,
					validations: SignInInputValidations,
					onSubmit,
					checkbox: (
						<CheckboxInput
							{...{ label: 'Keep me logged in', onChange: () => {} }}
						/>
					),
					buttonLabel,
					footer: <SignInFooter />,
				}}
			/>
		</div>
	)
})
