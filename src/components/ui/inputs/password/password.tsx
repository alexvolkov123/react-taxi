import { IconButton, InputAdornment, TextField } from '@mui/material'
import { useMemo, useState } from 'react'

import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FieldValues, Path } from 'react-hook-form'
import { FormInputProps } from '../form-input/form-input-props'

export function FormInputPassword<T extends FieldValues, N extends Path<T>>({
	register,
	input: { label, name, type },
	validation,
	errors,
}: FormInputProps<T, N>) {
	const [showPassword, setShowPassword] = useState(false)

	const handleClickShowPassword = () => setShowPassword(show => !show)

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
			InputProps={{
				endAdornment: (
					<InputAdornment position='end'>
						<IconButton onClick={handleClickShowPassword} edge='end'>
							{showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				),
			}}
			type={showPassword ? 'text' : 'password'}
		/>
	)
}
