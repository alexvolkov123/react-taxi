import { AuthFormTitle } from '../../shared/components'
import { SignInForm } from './sign-in-form'
import './sign-in.scss'

export const SignIn = () => {
  return (
    <div className='sign-in'>
      <AuthFormTitle title='Sign In' />
      <SignInForm />
    </div>
  )
}
