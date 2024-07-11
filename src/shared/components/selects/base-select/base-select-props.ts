export type BaseSelectProps = {
  className?: 'base' | 'custom'
  items: string[]
  selectedItem: string
  menuProps?: object
  isSelectedItemHidden?: boolean
  onChange: (value: string) => void
}
