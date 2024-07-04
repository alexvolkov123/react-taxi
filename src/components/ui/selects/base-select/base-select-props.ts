export type BaseSelectProps = {
	id: string
	items: string[]
	selectedItem: string
	removeFirstOption?: boolean
	onChange: (value: string) => void
}
