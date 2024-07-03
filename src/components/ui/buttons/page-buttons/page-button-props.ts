export enum ButtonSizeEnum {
	large = 'large',
	medium = 'medium',
	small = 'small',
}

export enum ButtonColorEnum {
	auth = 'auth',
	gold = 'gold',
	green = 'green',
	red = 'red',
	purple = 'purple',
	grey = 'grey',
}

export type PageButtonProps = {
	label: string
	size: ButtonSizeEnum
	color: ButtonColorEnum
	disabled: boolean
	onClick: () => void
}
