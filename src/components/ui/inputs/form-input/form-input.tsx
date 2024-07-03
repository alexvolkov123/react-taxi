import { TextField } from '@mui/material'
import { useMemo } from 'react'

import { FieldValues, Path } from 'react-hook-form'
import { FormInputProps } from './form-input-props'

export function FormInput<T extends FieldValues, N extends Path<T>>({
	register,
	input: { label, name, type },
	validation,
	errors,
	id,
}: FormInputProps<T, N>) {
	const errorText = useMemo(
		() => (errors[name]?.message as string) || '',
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[errors[name]]
	)

	return (
		<TextField
			{...register(name, validation)}
			label={label}
			variant='outlined'
			error={!!errors[name]}
			helperText={errorText}
			type={type}
			id={id}
		/>
	)
}
