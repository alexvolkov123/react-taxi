import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadingActions, resetPasswordActions } from '../store'

export const useActions = () => {
  const dispatch = useDispatch()

  const rootActions = {
    ...loadingActions,
    ...resetPasswordActions,
  }

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
