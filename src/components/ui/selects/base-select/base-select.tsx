import { MenuItem, Select } from '@mui/material'

import { BaseSelectProps } from './base-select-props'

export const BaseSelect = ({
	id,
	items,
	selectedItem,
	onChange,
}: BaseSelectProps) => {
	return (
		<Select
			value={selectedItem}
			onChange={e => onChange(e.target.value)}
			id={id}
		>
			{items.map((item, index) => (
				<MenuItem value={item} key={item}>
					{item}
				</MenuItem>
			))}
		</Select>
	)
}
