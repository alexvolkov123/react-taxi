import { SelectItem } from '../selects.types'

export type CustomSelectProps = {
  items: SelectItem[]
  selectedItem: string
  onChange: (value: string) => void
}
