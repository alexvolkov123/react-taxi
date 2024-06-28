import { FieldValues, Path, RegisterOptions } from 'react-hook-form'

import { InputType } from '../sign-in/types'

export type AuthFormProps<T extends FieldValues, N extends Path<T>> = {
	title: string
	validations: { [key: string]: RegisterOptions<T, N> }
	inputs: InputType<N>[]
	onSubmit: (data: T) => void
	buttonLabel: string
}
