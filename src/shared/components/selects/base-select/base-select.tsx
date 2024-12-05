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
  const getMenuItemStyle = (value: string) =>
    isSelectedItemHidden && selectedItem === value ? { display: 'none' } : {}

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
      {items.map(item => (
        <MenuItem value={item.value} key={item.label} style={getMenuItemStyle(item.value)}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  )
}
