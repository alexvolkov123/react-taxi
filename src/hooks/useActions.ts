import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { authActions, loadingActions } from '../store'

export const useActions = () => {
  const dispatch = useDispatch()

  const rootActions = useMemo(
    () => ({
      ...loadingActions,
      ...authActions,
    }),
    []
  )

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch, rootActions])
}
