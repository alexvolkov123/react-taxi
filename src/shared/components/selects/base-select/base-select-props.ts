export type BaseSelectProps = {
  className?: 'base' | 'custom'
  items: {
    label: string
    value: string
  }[]
  selectedItem: string
  onChange: (value: string) => void
}
