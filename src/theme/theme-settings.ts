import { ThemeOptions } from '@mui/material'
import { buttonColors, buttonSizes } from './button-settings'

export const themeSettings = {
	palette: {
		primary: {
			main: '#4d4d4d',
		},
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { id: 'auth' },
					style: {
						...buttonSizes.auth,
						...buttonColors.auth,
					},
				},
				{
					props: { id: 'large_gold' },
					style: {
						...buttonSizes.large,
						...buttonColors.gold,
					},
				},
				{
					props: { id: 'large_purple' },
					style: {
						...buttonSizes.large,
						...buttonColors.purple,
					},
				},
				{
					props: { id: 'large_green' },
					style: {
						...buttonSizes.large,
						...buttonColors.green,
					},
				},
				{
					props: { id: 'medium_red' },
					style: {
						...buttonSizes.medium,
						...buttonColors.red,
					},
				},
				{
					props: { id: 'medium_green' },
					style: {
						...buttonSizes.medium,
						...buttonColors.green,
					},
				},
				{
					props: { id: 'medium_grey' },
					style: {
						...buttonSizes.medium,
						...buttonColors.grey,
					},
				},
				{
					props: { id: 'small_red' },
					style: {
						...buttonSizes.small,
						...buttonColors.red,
					},
				},
				{
					props: { id: 'small_green' },
					style: {
						...buttonSizes.small,
						...buttonColors.green,
					},
				},
			],
		},
		MuiTextField: {
			variants: [
				{
					props: { variant: 'outlined' },
					style: {
						width: '100%',
						':hover > :not(.Mui-error) ': {
							color: '#4d4d4d',
						},
					},
				},
				{
					props: { type: 'date' },
					style: {
						input: {
							position: 'relative',

							'::-webkit-calendar-picker-indicator': {
								cursor: 'pointer',
								position: 'absolute',
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								width: 'auto',
								height: 'auto',
								color: 'transparent',
								background: 'transparent',
							},
						},
					},
				},
			],
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderRadius: 10,
					width: '100%',
					backgroundColor: '#e8e8e8',
					color: '#4d4d4d',
				},
				notchedOutline: {
					borderWidth: 2,
				},
			},
		},
		MuiFormLabel: {
			styleOverrides: {
				root: {
					color: '#b8b8b8',
				},
			},
		},
		MuiFormHelperText: {
			styleOverrides: {
				root: {
					height: 0,
					margin: 0,
				},
			},
		},
		MuiSelect: {
			styleOverrides: {
				root: {
					width: 200,
					textAlign: 'left',
				},
				icon: {
					fontSize: 40,
				},
			},
		},
	},
} as ThemeOptions
