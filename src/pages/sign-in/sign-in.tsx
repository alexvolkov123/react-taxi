import { AuthFormTitle } from '../../shared/components'
import { ResetPassword } from './reset-password'
import { SignInForm } from './sign-in-form'
import './sign-in.scss'

export const SignIn = () => {
  return (
    <div className='sign-in'>
      <AuthFormTitle title='Sign In' />
      <SignInForm />
      <ResetPassword />
    </div>
  )
}
