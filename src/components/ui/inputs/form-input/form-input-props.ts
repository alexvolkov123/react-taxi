import {
	FieldErrors,
	FieldValues,
	Path,
	RegisterOptions,
	UseFormRegister,
} from 'react-hook-form'

export type InputType<N> = {
	label?: string
	name: N
	type: string
}

export type FormInputProps<T extends FieldValues, N extends Path<T>> = {
	register: UseFormRegister<T>
	input: InputType<N>
	validation: RegisterOptions<T, N>
	errors: FieldErrors<T>
	id: string
}
