export const menuSettings = {
	PaperProps: {
		sx: {
			marginLeft: '-10px',
			backgroundColor: '#3e3436ff',
			padding: 0,
			borderRadius: '10px',
			overflow: 'visible',

			'::after': {
				content: `''`,
				position: 'absolute',
				right: 10,
				top: -5,
				width: 0,
				height: 0,
				borderLeft: '6px solid transparent',
				borderRight: '6px solid transparent',
				borderBottom: '6px solid #3e3436ff',
			},

			'& .MuiList-root': {
				padding: 0,
				marginTop: '5px',
				marginBottom: '5px',
			},

			'& .MuiMenuItem-root': {
				fontFamily: 'Rasa',
				width: '100%',
				padding: 0,
				color: '#fff',
				display: 'flex',
				justifyContent: 'center',

				':hover': {
					backgroundColor: '#493f41ff',
					borderRadius: '4px',
				},
			},
		},
	},
}
