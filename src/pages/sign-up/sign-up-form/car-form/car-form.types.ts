import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { RegisterUserData } from '../../../../shared'

export type CarFormProps = {
  register: UseFormRegister<RegisterUserData>
  errors: FieldErrors<RegisterUserData>
}
