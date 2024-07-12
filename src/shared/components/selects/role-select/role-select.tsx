import { FormControl, FormHelperText, InputLabel } from '@mui/material'
import { baseSelectMenuSettings } from '../../../../theme'
import { BaseSelect } from '../base-select'
import { AuthSelectProps } from './role-select.types'

export const RoleSelect = ({
  inputProps: { register, error, errorMessage },
  baseSelectProps,
}: AuthSelectProps) => {
  return (
    <FormControl error={error}>
      <BaseSelect
        register={register}
        labelId='role'
        label='Role'
        className='base'
        menuProps={baseSelectMenuSettings}
        {...baseSelectProps}
      />
      <InputLabel id='role'>Role</InputLabel>
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  )
}
