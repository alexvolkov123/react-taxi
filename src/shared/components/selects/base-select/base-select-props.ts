export type BaseSelectProps = {
  className?: 'base' | 'custom'
  items: {
    label: string
    value: string
  }[]
  selectedItem: string
  menuProps?: object
  isSelectedItemHidden?: boolean
  onChange: (value: string) => void
}
