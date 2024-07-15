import { MenuItem, Select } from '@mui/material'

import { BaseSelectProps } from './base-select-props'

export const BaseSelect = ({
  className = 'base',
  items,
  selectedItem,
  label,
  onChange,
}: BaseSelectProps) => {
  return (
    <Select
      value={selectedItem}
      label={label}
      onChange={e => onChange(e.target.value)}
      className={className}
    >
      {items.map(item => (
        <MenuItem value={item.value} key={item.label}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  )
}
