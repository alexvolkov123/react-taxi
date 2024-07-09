import { resetPasswordActions } from '../slices'
import { loadingActions } from '../slices/loading.slice'

export const rootActions = {
  ...loadingActions,
  ...resetPasswordActions,
}
