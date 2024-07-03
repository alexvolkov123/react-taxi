export type BaseSelectProps = {
	id: string
	items: string[]
	selectedItem: string
	onChange: (value: string) => void
}
