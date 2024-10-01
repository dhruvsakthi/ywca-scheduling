import { ButtonBase, styled } from '@mui/material'

import type { ButtonProps } from '@mui/material'
import type { FC } from 'react'

const VendorButton = styled(ButtonBase)({
  padding: '12px 16px',
  borderRadius: '20px',
  backgroundColor: '#e76f51',
  transition: 'transform 100ms ease',

  '&:hover': {
    backgroundColor: '#a2e1a2',
  },

  '&:active': {
    transform: 'scale(0.96)',
  },
})

const VendorIcon: FC<ButtonProps> = ({ children, ...props }) => (
  <VendorButton {...props}>{children}</VendorButton>
)

export default VendorIcon

export {}
