import { MenuItem, Select } from '@mui/material'

import { BaseSelectProps } from './base-select-props'

export const BaseSelect = ({
  className = 'base',
  items,
  selectedItem,
  menuProps = {},
  isSelectedItemHidden,
  onChange,
}: BaseSelectProps) => {
  return (
    <Select
      value={selectedItem}
      onChange={e => onChange(e.target.value)}
      MenuProps={menuProps}
      className={className}
    >
      {items.map((item, index) => (
        <MenuItem
          value={item}
          key={item}
          style={isSelectedItemHidden && !index ? { display: 'none' } : {}}
        >
          {item}
        </MenuItem>
      ))}
    </Select>
  )
}
