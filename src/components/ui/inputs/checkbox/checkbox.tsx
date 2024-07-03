import { Checkbox, FormControlLabel } from '@mui/material'
import { CheckboxProps } from './checkbox-props'

export const CheckboxInput = ({ label, onChange }: CheckboxProps) => {
	return (
		<FormControlLabel
			label={label}
			control={<Checkbox onChange={onChange} id='checkbox' color='default' />}
		/>
	)
}
