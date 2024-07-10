export type PageButtonProps = {
	label: string
	size: 'large' | 'medium' | 'small'
	color: 'auth' | 'gold' | 'green' | 'red' | 'purple' | 'grey'
	disabled: boolean
	onClick: () => void
}
