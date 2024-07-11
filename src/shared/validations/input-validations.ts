const REG_EMAIL = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
const REG_LATIN = /[a-zA-Z]/

export const emailValidation = {
  required: 'Email is required',
  pattern: { value: REG_EMAIL, message: 'Invalid email' },
}

export const passwordValidation = {
  required: 'Password is required',
  pattern: { value: REG_LATIN, message: 'Invalid password' },
  minLength: { value: 8, message: 'Password must be longer' },
}
