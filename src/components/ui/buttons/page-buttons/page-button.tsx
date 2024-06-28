import { Button } from '@mui/material'
import { useMemo } from 'react'
import { PageButtonProps } from './page-button-props'

export const PageButton = ({
	label,
	size,
	color,
	onClick,
}: PageButtonProps) => {
	const buttonId = useMemo(() => `${size}_${color}`, [color, size])

	return (
		<Button onClick={onClick} id={buttonId}>
			{label}
		</Button>
	)
}
