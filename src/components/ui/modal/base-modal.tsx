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
				<IconButton
					onClick={onClose}
					sx={{
						position: 'absolute',
						right: 0,
						top: 0,
						color: '#4a4a4a',
					}}
				>
					<Close />
				</IconButton>
			)}

			<DialogContent dividers>{children}</DialogContent>
		</Dialog>
	)
}
