import { PageButton } from '../../shared/components'
import { SignInForm } from './sign-in-form'

export const SignIn = () => {
  return (
    <>
      <SignInForm />
      <PageButton label='Qwerty' size='large' color='purple' disabled={false} onClick={() => {}} />
    </>
  )
}
