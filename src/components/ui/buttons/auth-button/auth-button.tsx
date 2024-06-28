import { memo } from 'react'

import { Button } from '@mui/material'
import { FormButtonProps } from './props'

export const AuthButton = memo(({ label, disabled }: FormButtonProps) => {
	return (
		<Button disabled={disabled} id='auth' type='submit'>
			{label}
		</Button>
	)
})
