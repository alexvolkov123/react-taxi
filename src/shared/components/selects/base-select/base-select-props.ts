import { UseFormRegisterReturn } from 'react-hook-form'

import { SelectItem } from '../selects.types'

export type BaseSelectProps = {
  className?: 'base' | 'custom'
  labelId?: string
  label?: string
  items: SelectItem[]
  isSelectedItemHidden?: boolean
  register?: UseFormRegisterReturn<'role'>
  selectedItem?: string
  menuProps?: object
  onChange: (value: string) => void
}
