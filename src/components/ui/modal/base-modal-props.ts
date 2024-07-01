import { ReactElement } from 'react'

export type BaseModalProps = {
	open: boolean
	onClose: () => void
	isCloseButton?: boolean
	children: ReactElement
}
