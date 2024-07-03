import { FieldValues, Path, RegisterOptions } from 'react-hook-form'

import { ReactElement } from 'react'
import { InputType } from '../sign-in/types'

export type AuthFormProps<T extends FieldValues, N extends Path<T>> = {
	validations: { [key: string]: RegisterOptions<T, N> }
	inputs: InputType<N>[]
	onSubmit: (data: T) => void
	checkbox?: ReactElement
	buttonLabel: string
	footer?: ReactElement
}
