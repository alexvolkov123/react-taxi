import { memo } from 'react'

import { Button } from '@mui/material'
import { FormButtonProps } from './props'

export const AuthButton = memo(
	({ label, disabled, id = 'auth' }: FormButtonProps) => {
		return (
			<Button disabled={disabled} id={id} type='submit'>
				{label}
			</Button>
		)
	}
)
