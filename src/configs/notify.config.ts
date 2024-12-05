import { ToastContainerProps, Zoom } from 'react-toastify';

export const notifyProps: ToastContainerProps = {
    position: 'bottom-right',
    autoClose: 2,
    limit: 2,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'light',
    transition: Zoom,
};

export const notifyConfig = {
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Zoom,
};
