import { MenuItem, Select } from '@mui/material'

import { BaseSelectProps } from './base-select-props'

export const BaseSelect = ({
  className = 'base',
  items,
  selectedItem,
  menuProps = {},
  isSelectedItemHidden = false,
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
        <MenuItem value={item} key={item} hidden={isSelectedItemHidden && !index}>
          {item}
        </MenuItem>
      ))}
    </Select>
  )
}
