import { ButtonBase, styled } from '@mui/material'
import { Link } from 'react-router-dom'

import type { ButtonProps } from '@mui/material'
import type { FC } from 'react'

const ColorButton = styled(ButtonBase)({
  padding: '12px 16px',
  borderRadius: '20px',
  backgroundColor: '#fa4616',
  transition: 'transform 900ms ease',
  color: 'white',

  '&:hover': {
    backgroundColor: '#ff693b', // Lighter orange color
  },

  '&:active': {
    transform: 'scale(0.96)',
  },
})

const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <ColorButton {...props}>{children}</ColorButton>
)

export default ColorButton
