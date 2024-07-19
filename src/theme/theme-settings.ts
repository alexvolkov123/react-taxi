import { ThemeOptions } from '@mui/material';
import {
    muiButtonSettings,
    muiHelperTextSettings,
    muiIconButtonSettings,
    muiLinkSettings,
    muiSelectSettings,
    muiTextFieldSettings,
} from './component-settings';
import { themeColors } from './theme-colors';

export const themeSettings = {
    palette: {
        primary: {
            main: themeColors.main,
        },
    },
    components: {
        MuiPaper: {
            variants: [
                {
                    props: { className: 'sign-in__footer' },
                    style: {
                        boxShadow: 'none',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                    },
                },
            ],
        },
        ...muiButtonSettings,
        ...muiTextFieldSettings,
        ...muiHelperTextSettings,
        ...muiSelectSettings,
        ...muiLinkSettings,
        ...muiIconButtonSettings,
    },
} as ThemeOptions;
