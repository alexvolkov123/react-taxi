import { MenuItem, Select } from '@mui/material'

import { useCallback } from 'react'
import { BaseSelectProps } from './base-select-props'

export const BaseSelect = ({
	id,
	items,
	selectedItem,
	removeFirstOption = false,
	menuProps,
	onChange,
}: BaseSelectProps) => {
	const getMenuItemStyle = useCallback(
		(index: number) =>
			removeFirstOption && index === 0 ? { display: 'none' } : {},
		[removeFirstOption]
	)

	return (
		<Select
			value={selectedItem}
			onChange={e => onChange(e.target.value)}
			id={id}
			MenuProps={menuProps}
		>
			{items.map((item, index) => (
				<MenuItem value={item} key={item} style={getMenuItemStyle(index)}>
					{item}
				</MenuItem>
			))}
		</Select>
	)
}
