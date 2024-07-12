import { MenuItem, Select } from '@mui/material'

import { BaseSelectProps } from './base-select-props'

export const BaseSelect = ({
  className = 'base',
  items,
  selectedItem,
  menuProps = {},
  isSelectedItemHidden,
  labelId,
  register,
  label,
  onChange,
}: BaseSelectProps) => {
  return (
    <Select
      {...register}
      value={selectedItem}
      MenuProps={menuProps}
      onChange={e => onChange(e.target.value)}
      labelId={labelId}
      label={label}
      className={className}
    >
      {items.map((item, index) => (
        <MenuItem
          value={item.value}
          key={item.label}
          style={isSelectedItemHidden && !index ? { display: 'none' } : {}}
        >
          {item.label}
        </MenuItem>
      ))}
    </Select>
  )
}
