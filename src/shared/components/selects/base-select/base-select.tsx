import { MenuItem, Select } from '@mui/material'

import { BaseSelectProps } from './base-select-props'

export const BaseSelect = ({
  className = 'base',
  items,
  selectedItem,
  menuProps = {},
  isSelectedItemHidden,
  label,
  onChange,
}: BaseSelectProps) => {
  const getMenuItemStyle = (value: string) =>
    isSelectedItemHidden && selectedItem === value ? { display: 'none' } : {}

  return (
    <Select
      value={selectedItem}
      MenuProps={menuProps}
      onChange={e => onChange(e.target.value)}
      label={label}
      className={className}
    >
      {items.map(item => (
        <MenuItem value={item.value} key={item.label} style={getMenuItemStyle(item.value)}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  )
}
