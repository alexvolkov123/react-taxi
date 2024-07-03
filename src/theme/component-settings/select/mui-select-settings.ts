export const muiSelectSettings = {
	MuiSelect: {
		variants: [
			{
				props: { id: 'base' },
				style: {
					width: 120,
					height: 50,
					cursor: 'pointer',
					color: 'white',
					fieldset: {
						border: 'none',
					},
					li: {
						backgroundColor: '#191919',
					},
				},
			},
		],
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
}
