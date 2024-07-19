import { toast } from 'react-toastify';

import { notifyConfig } from '../../configs/notify.config';

export const notify = (text: string, type: 'success' | 'error' = 'success'): void => {
    toast[type](text, notifyConfig);
};
