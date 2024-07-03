import { buttonColors, buttonSizes } from './button-settings'

export const muiButtonSettings = {
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
				props: { id: 'medium_auth' },
				style: {
					...buttonSizes.medium_auth,
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
}
