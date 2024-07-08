import { Button } from '@mui/material'
import { useMemo } from 'react'

import { PageButtonProps } from './page-button.types'

export const PageButton = ({ label, size, color, disabled, onClick }: PageButtonProps) => {
  const buttonId = useMemo(() => `${size}_${color}`, [color, size])

  return (
    <Button onClick={onClick} id={buttonId} disabled={disabled}>
      {label}
    </Button>
  )
}
