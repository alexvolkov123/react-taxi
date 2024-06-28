import { useCallback } from 'react'
import { FieldValues, Path, SubmitHandler, useForm } from 'react-hook-form'

import { formConfig } from '../../utils/form-config/form-config'
import { AuthButton } from '../ui/buttons/auth-button/auth-button'
import { FormInput } from '../ui/inputs/form-input/form-input'
import './auth-form.css'
import { AuthFormProps } from './props'

export function AuthForm<T extends FieldValues, N extends Path<T>>({
	title,
	inputs,
	validations,
	onSubmit,
	buttonLabel,
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
		<>
			<form onSubmit={handleSubmit(handleOnSubmit)} className='form'>
				{inputs.map(input => (
					<>
						<FormInput
							key={input.label}
							{...{
								register,
								input,
								validation: validations[input.name],
								errors,
							}}
						/>
					</>
				))}

				<AuthButton label={buttonLabel} disabled={!isValid} />
			</form>
		</>
	)
}
