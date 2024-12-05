import { ThemeOptions } from '@mui/material';

import {
    muiButtonSettings,
    muiHelperTextSettings,
    muiIconButtonSettings,
    muiLinkSettings,
    muiPaperSettings,
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
        ...muiPaperSettings,
        ...muiButtonSettings,
        ...muiTextFieldSettings,
        ...muiHelperTextSettings,
        ...muiSelectSettings,
        ...muiLinkSettings,
        ...muiIconButtonSettings,
    },
} as ThemeOptions;
