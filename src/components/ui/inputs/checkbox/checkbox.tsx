import { Checkbox, FormControlLabel } from '@mui/material'
import { FieldValues, Path } from 'react-hook-form'

import { FormInputProps } from '../form-input/form-input-props'

export function CheckboxInput<T extends FieldValues, N extends Path<T>>({
	register,
	input: { label, name },
}: FormInputProps<T, N>) {
	return (
		<FormControlLabel
			label={label}
			control={<Checkbox {...register(name)} />}
		/>
	)
}
