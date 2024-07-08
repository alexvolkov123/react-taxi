import { Theme, createTheme } from '@mui/material'

import { themeSettings } from './theme-settings'

export const useTheme = () => {
	const theme = (): Theme => createTheme(themeSettings)

	return { theme }
}
