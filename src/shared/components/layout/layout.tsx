import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { notifyProps } from '../../../configs';
import { SpinnerProvider } from '../../../providers';
import { Header } from './header';
import './layout.scss';

export const Layout = () => {
    return (
        <div className='layout'>
            <Header />
            <div className='layout__body'>
                <SpinnerProvider>
                    <Outlet />
                </SpinnerProvider>
            </div>
            <ToastContainer {...notifyProps} />
        </div>
    );
};
