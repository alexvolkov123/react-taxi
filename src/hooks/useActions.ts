import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { authActions, loadingActions, resetPasswordActions } from '../store'

export const useActions = () => {
  const dispatch = useDispatch()

  const rootActions = useMemo(
    () => ({
      ...loadingActions,
      ...resetPasswordActions,
      ...authActions,
    }),
    []
  )

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch, rootActions])
}
