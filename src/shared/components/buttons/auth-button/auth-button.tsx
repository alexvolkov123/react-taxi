import { Button } from '@mui/material'

import { AuthButtonProps } from './auth-button.types'

export const AuthButton = ({
	label,
	disabled,
	id = 'auth',
}: AuthButtonProps) => {
	return (
		<Button disabled={disabled} id={id} type='submit'>
			{label}
		</Button>
	)
}
