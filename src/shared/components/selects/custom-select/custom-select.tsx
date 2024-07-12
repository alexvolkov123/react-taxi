import { customSelectMenuSettings } from '../../../../theme'
import { BaseSelect } from '../base-select'
import { CustomSelectProps } from './custom-select.types'

export const CustomSelect = (props: CustomSelectProps) => {
  return (
    <BaseSelect
      className='custom'
      menuProps={customSelectMenuSettings}
      isSelectedItemHidden={true}
      {...props}
    />
  )
}
