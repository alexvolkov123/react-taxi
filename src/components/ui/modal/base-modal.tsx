import { Close } from '@mui/icons-material'
import { Dialog, DialogContent, IconButton } from '@mui/material'
import { BaseModalProps } from './base-modal-props'

export const BaseModal = ({
	open,
	onClose,
	children,
	isCloseButton = true,
}: BaseModalProps) => {
	return (
		<Dialog onClose={onClose} open={open}>
			{isCloseButton && (
				<IconButton onClick={onClose} id='modal'>
					<Close />
				</IconButton>
			)}

			<DialogContent>{children}</DialogContent>
		</Dialog>
	)
}
