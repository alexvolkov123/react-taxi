import { UseFormRegisterReturn } from 'react-hook-form'

import { SelectItem } from '../selects.types'

export type AuthSelectProps = {
  inputProps: {
    register: UseFormRegisterReturn<'role'>
    error: boolean
    errorMessage?: string
  }
  baseSelectProps: {
    items: SelectItem[]
    selectedItem: string
    onChange: (value: string) => void
  }
}
