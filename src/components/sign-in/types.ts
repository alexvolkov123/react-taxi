export type SignInInputNamesType = 'email' | 'password'

export type InputType<N> = {
	label?: string
	name: N
	type: 'text' | 'password' | 'number' | 'date'
}
