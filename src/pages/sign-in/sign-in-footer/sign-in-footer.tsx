import { Link, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useActions } from '../../../hooks';
import { RoutePathsEnum } from '../../../router';

export const SignInFooter = () => {
    const navigate = useNavigate();
    const { setOpenResetPassword } = useActions();

    const navigateToRegister = () => navigate(RoutePathsEnum.signUp);

    return (
        <Paper className='sign-in__footer'>
            <Link onClick={() => setOpenResetPassword(true)} className='auth'>
                Forgot password?
            </Link>
            <Link onClick={navigateToRegister} className='auth'>
                I don’t have an account
            </Link>
        </Paper>
    );
};
