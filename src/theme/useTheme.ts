import { Theme, createTheme } from '@mui/material'
import { useMemo } from 'react'
import { themeSettings } from './theme-settings'

export const useTheme = () => {
	const theme = useMemo((): Theme => createTheme(themeSettings), [])

	return { theme }
}
