export const buttonFontsSizes = {
	authButton: {
		fontSize: '26px',
		fontWeight: 100,
		textTransform: 'uppercase',
		fontFamily: 'Roboto',
	},
	largeButton: {
		fontSize: '38px',
		fontWeight: 700,
		fontFamily: 'Rasa',
	},
	mediumButton: {
		fontSize: '30px',
		fontWeight: 700,
		fontFamily: 'Rasa',
	},
	smallButton: {
		fontSize: '26px',
		fontWeight: 700,
		fontFamily: 'Rasa',
	},
}

export const buttonSizes = {
	auth: {
		width: '300px',
		height: '56px',
		borderRadius: '5px',
		paddingTop: '5px',
		...buttonFontsSizes.authButton,
	},
	large: {
		width: '280px',
		height: '95px',
		borderRadius: '50px',
		padding: '5px 0px 0px',
		...buttonFontsSizes.largeButton,
	},
	medium: {
		width: '190px',
		height: '55px',
		borderRadius: '30px',
		padding: '5px 0px 0px',
		...buttonFontsSizes.mediumButton,
	},
	medium_auth: {
		width: '165px',
		height: '56px',
		borderRadius: '5px',
		padding: '5px 0px 0px',
		...buttonFontsSizes.authButton,
	},
	small: {
		width: '130px',
		height: '45px',
		borderRadius: '30px',
		padding: '5px 0px 0px',
		...buttonFontsSizes.smallButton,
	},
}

export const buttonColors = {
	auth: {
		backgroundColor: '#00A1E5',
		color: '#fff',
		':hover': {
			backgroundColor: '#1abaff',
		},
		':disabled': {
			backgroundColor: '#AEAEAE',
			color: '#fff',
		},
	},
	gold: {
		backgroundColor: '#C4A267',
		color: '#fff',
		':hover': {
			backgroundColor: '#e6bb70',
		},
		':disabled': {
			backgroundColor: '#AEAEAE',
			color: '#fff',
		},
	},
	green: {
		backgroundColor: '#5DCE7C',
		color: '#fff',
		':hover': {
			backgroundColor: '#67eb8a',
		},
		':disabled': {
			backgroundColor: '#AEAEAE',
			color: '#fff',
		},
	},
	red: {
		backgroundColor: '#CE6A5D',
		color: '#fff',
		':hover': {
			backgroundColor: '#e77565',
		},
		':disabled': {
			backgroundColor: '#AEAEAE',
			color: '#fff',
		},
	},
	purple: {
		backgroundColor: '#494357',
		color: '#fff',
		':hover': {
			backgroundColor: '#605875',
		},
		':disabled': {
			backgroundColor: '#AEAEAE',
			color: '#fff',
		},
	},
	grey: {
		backgroundColor: '#3D3B40',
		color: '#fff',
		':hover': {
			backgroundColor: '#2f2c33',
		},
		':disabled': {
			backgroundColor: '#AEAEAE',
			color: '#fff',
		},
	},
}
