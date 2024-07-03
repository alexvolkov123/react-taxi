import { useCallback } from 'react'
import { FieldValues, Path, SubmitHandler, useForm } from 'react-hook-form'

import { formConfig } from '../../utils/form-config/form-config'
import { AuthButton } from '../ui/buttons/auth-button/auth-button'
import { FormInputWrapper } from '../ui/inputs/form-input-wrapper'
import './auth-form.scss'
import { AuthFormProps } from './props'

export function AuthForm<T extends FieldValues, N extends Path<T>>({
	inputs,
	validations,
	onSubmit,
	checkbox: children,
	buttonLabel,
	footer,
}: AuthFormProps<T, N>) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<T>(formConfig)

	const handleOnSubmit: SubmitHandler<T> = useCallback(
		(data: T): void => {
			onSubmit(data)
			reset()
		},
		[onSubmit, reset]
	)

	return (
		<div className='form'>
			<div className='form__wrapper'>
				<form onSubmit={handleSubmit(handleOnSubmit)}>
					{inputs.map(input => (
						<>
							<FormInputWrapper
								key={input.type}
								{...{
									register,
									input,
									validation: validations[input.name],
									errors,
									id: 'auth',
								}}
							/>
						</>
					))}

					{!!children && children}

					<AuthButton label={buttonLabel} disabled={!isValid} />
				</form>
				{!!footer && footer}
			</div>
		</div>
	)
}
