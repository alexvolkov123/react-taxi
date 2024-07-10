import { Checkbox, FormControlLabel } from '@mui/material'

import { CheckboxProps } from './checkbox-input.types'

export const CheckboxInput = ({ onChange, label }: CheckboxProps) => {
	return (
		<FormControlLabel
			control={
				<Checkbox onChange={e => onChange(e.target.checked)} color='default' />
			}
			label={label}
		/>
	)
}
