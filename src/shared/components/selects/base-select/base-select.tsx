import { MenuItem, Select } from '@mui/material'

import { BaseSelectProps } from './base-select-props'

export const BaseSelect = ({
  className = 'base',
  items,
  selectedItem,
  onChange,
}: BaseSelectProps) => {
  return (
    <Select value={selectedItem} onChange={e => onChange(e.target.value)} className={className}>
      {items.map(item => (
        <MenuItem value={item} key={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  )
}
