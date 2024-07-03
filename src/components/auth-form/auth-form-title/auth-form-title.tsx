import { Typography } from '@mui/material'

export const AuthFormTitle = ({ title }: { title: string }) => {
	return (
		<Typography color='#fff' fontSize={40}>
			{title}
		</Typography>
	)
}
