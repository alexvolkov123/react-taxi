export type BaseSelectProps = {
  className?: 'base' | 'custom'
  items: string[]
  selectedItem: string
  onChange: (value: string) => void
}
