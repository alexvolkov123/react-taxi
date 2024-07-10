import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadingActions } from '../store'

export const useActions = () => {
  const dispatch = useDispatch()

  const rootActions = {
    ...loadingActions,
  }

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
