import { Close } from '@mui/icons-material';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import { PropsWithChildren } from 'react';

import { BaseModalProps } from './base-modal-props';

export const BaseModal = ({ open, onClose, children, isShowCloseButton = true }: PropsWithChildren<BaseModalProps>) => {
    return (
        <Dialog onClose={onClose} open={open}>
            {isShowCloseButton && (
                <IconButton onClick={onClose} id='modal'>
                    <Close />
                </IconButton>
            )}

            <DialogContent>{children}</DialogContent>
        </Dialog>
    );
};
