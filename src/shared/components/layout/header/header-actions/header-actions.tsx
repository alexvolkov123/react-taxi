import { Link } from '@mui/material';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useActions, useLanguages, useTypedSelector } from '../../../../../hooks';
import { RoutePathsEnum } from '../../../../../router';
import { authSelector } from '../../../../../store';
import { CustomSelect } from '../../../selects';
import './header-actions.scss';

export const HeaderActions = () => {
    const navigate = useNavigate();
    const { language, languages, setLanguage } = useLanguages();
    const { deleteCredentials } = useActions();

    const { userTokens } = useTypedSelector(authSelector);

    const handleChangeLanguage = (value: string) =>
        setLanguage({
            label: value,
            value,
        });

    const logout = useCallback(() => {
        deleteCredentials();
        navigate(RoutePathsEnum.root);
    }, [deleteCredentials, navigate]);

    return (
        <div className='header-actions'>
            <div className='header-actions__items'>
                <CustomSelect
                    {...{
                        items: languages,
                        selectedItem: language.label,
                        onChange: handleChangeLanguage,
                    }}
                />
                {userTokens && <Link onClick={logout}>Log Out</Link>}
            </div>
        </div>
    );
};
