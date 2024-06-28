// eslint-disable-next-line no-useless-escape
const REG_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
const REG_LATIN = /[а-яА-Я]/

const emailValidation = {
	required: 'Email is required',
	validate: (value: string) => {
		if (value.match(REG_LATIN)) return 'Email must contain only latin letters'
		if (!value.match(REG_EMAIL)) return 'Invalid Email'
	},
}

const passwordValidation = {
	required: 'Password is required',
	validate: (value: string) => {
		if (value.length < 8) return 'Password must be contain at least 8 letters'
	},
}
const confirmPasswordValidation = {
	required: 'Confirm password is required',
	validate: (value: string) => {
		if (value.length < 8) return 'Password must be contain at least 8 letters'
	},
}

const textIsRequired = (name: string) => ({
	required: `${name} is required`,
})

export const SignInInputValidations = {
	email: emailValidation,
	password: passwordValidation,
}
