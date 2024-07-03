export const muiLinkSettings = {
	MuiLink: {
		variants: [
			{
				props: { id: 'auth' },
				style: {
					color: '#000',
					margin: '10px 0',
					textAlign: 'center',
				},
			},
		],
		styleOverrides: {
			root: {
				color: 'white',
				cursor: 'pointer',
				textDecoration: 'none',
			},
		},
	},
}
