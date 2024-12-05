import { Stack, TextField, Typography } from '@mui/material'

import { CarFormProps } from './car-form.types'

export const CarForm = ({ register, errors }: CarFormProps) => {
  return (
    <Stack spacing={3}>
      <Typography fontSize={25} marginLeft={2}>
        Car
      </Typography>
      <TextField
        {...register('car.make', { required: 'This field is required' })}
        label='Make'
        variant='outlined'
        error={!!errors.car?.make}
        helperText={errors.car?.make?.message}
        className='auth'
      />
      <TextField
        {...register('car.model', { required: 'This field is required' })}
        label='Model'
        variant='outlined'
        error={!!errors.car?.model}
        helperText={errors.car?.model?.message}
        className='auth'
      />
      <TextField
        {...register('car.year', { required: 'This field is required' })}
        label='Year'
        variant='outlined'
        error={!!errors.car?.year}
        helperText={errors.car?.year?.message}
        className='auth'
      />
      <TextField
        {...register('car.color', { required: 'This field is required' })}
        label='Color'
        variant='outlined'
        error={!!errors.car?.color}
        helperText={errors.car?.color?.message}
        className='auth'
      />
    </Stack>
  )
}
