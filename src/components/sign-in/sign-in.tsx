import { memo, useMemo } from 'react'

import { useActions } from '../../hooks/useActions'
import { useLoginMutation } from '../../store/api/login.api'
import { LoginRequest } from '../../types/types'
import { notify } from '../../utils/notify/notify'
import { AuthForm } from '../auth-form/auth-form'
import { AuthFormTitle } from '../auth-form/auth-form-title/auth-form-title'
import { SignInInputValidations } from '../auth-form/validation/auth-validation'
import { CheckboxInput } from '../ui/inputs/checkbox/checkbox'
import { SignInFooter } from './footer/footer'
import './sign-in.scss'
import { InputType, SignInInputNamesType } from './types'

export const SignInComponent = memo(() => {
	const [login, { error, isError, isSuccess, isLoading }] = useLoginMutation({})
	const { setLoading } = useActions()

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

	const onSubmit = (user: LoginRequest) => {
		login(user)
	}

	isLoading && setLoading(true)

	if (isError) {
		setLoading(false)
		notify('Something went wrong', 'error')
	}
	if (isSuccess) {
		setLoading(false)
		notify('You are logged in')
	}

	return (
		<div className='signIn'>
			<AuthFormTitle {...{ title }} />
			<AuthForm<LoginRequest, SignInInputNamesType>
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
