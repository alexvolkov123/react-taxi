import { ThemeProvider } from '@emotion/react'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useTypedSelector } from './hooks'
import { router } from './router'
import { Spinner } from './shared'
import { useTheme } from './theme'

export const App = () => {
  const { theme } = useTheme()
  const { isLoading } = useTypedSelector(state => state.loading)

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />

      {isLoading && <Spinner />}

      <ToastContainer
        position={'bottom-right'}
        autoClose={2}
        limit={2}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        theme={'light'}
        transition={Zoom}
      />
    </ThemeProvider>
  )
}
