import { ThemeProvider } from '@emotion/react'
import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import WebFont from 'webfontloader'

import { router } from './router/router'
import { useTheme } from './theme/useTheme'

export const App = () => {
	const { theme } = useTheme()

	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Roboto', 'Rasa', 'Rubik'],
			},
		})
	}, [])

	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	)
}
