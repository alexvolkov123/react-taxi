import { ThemeOptions } from '@mui/material'
import { muiButtonSettings } from './component-settings/button/mui-button-settings'
import { muiHelperTextSettings } from './component-settings/helper-text/mui-helper-text-settings'
import { muiIconButtonSettings } from './component-settings/icon-button/mui-icon-button-settings'
import { muiTextFieldSettings } from './component-settings/input/mui-text-field-settings'
import { muiLinkSettings } from './component-settings/link/mui-link-settings'
import { muiSelectSettings } from './component-settings/select/mui-select-settings'
import { themeColors } from './theme-colors'

export const themeSettings = {
	palette: {
		primary: {
			main: themeColors.main,
		},
	},
	components: {
		...muiButtonSettings,
		...muiTextFieldSettings,
		...muiHelperTextSettings,
		...muiSelectSettings,
		...muiLinkSettings,
		...muiIconButtonSettings,
	},
} as ThemeOptions
