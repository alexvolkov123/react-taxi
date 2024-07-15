export type BaseSelectProps = {
  className?: 'base' | 'custom'
  items: {
    label: string
    value: string
  }[]
  label?: string
  selectedItem: string
  onChange: (value: string) => void
}
