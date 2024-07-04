import { MenuProps } from '@mui/material'

export type BaseSelectProps = {
	id: string
	items: string[]
	selectedItem: string
	removeFirstOption?: boolean
	menuProps?: Partial<MenuProps>
	onChange: (value: string) => void
}
