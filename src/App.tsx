import { ThemeProvider } from '@emotion/react'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import WebFont from 'webfontloader'

import { router } from './router/router'
import { store } from './store/store'
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
			<Provider store={store}>
				<RouterProvider router={router} />

				<ToastContainer
					position={'bottom-left'}
					autoClose={2}
					limit={2}
					hideProgressBar={false}
					closeOnClick={true}
					pauseOnHover={true}
					draggable={true}
					theme={'light'}
					transition={Zoom}
				/>
			</Provider>
		</ThemeProvider>
	)
}
