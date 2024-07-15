import { ThemeProvider } from '@emotion/react'
import { RouterProvider } from 'react-router-dom'

import { router } from './router/router'
import { useTheme } from './theme/useTheme'

export const App = () => {
	const { theme } = useTheme()

	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	)
}
