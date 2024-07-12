import { AuthFormTitle } from '../../shared'
import { SignUpForm } from './sign-up-form'

export const SignUp = () => {
  return (
    <div className='sign-up'>
      <AuthFormTitle title='Sign Up' />
      <SignUpForm />
    </div>
  )
}
