import { FieldValues, Path } from 'react-hook-form'

import { FormInput } from './form-input/form-input'
import { FormInputProps } from './form-input/form-input-props'
import { FormPasswordInput } from './password/password'

export function FormInputWrapper<T extends FieldValues, N extends Path<T>>(
	inputData: FormInputProps<T, N>
) {
	const getDesiredInput = () => {
		const inputType = inputData.input.type
		console.log(inputType)

		if (inputType === 'password') {
			return <FormPasswordInput {...inputData} />
		}

		return <FormInput {...inputData} />
	}

	return getDesiredInput()
}
