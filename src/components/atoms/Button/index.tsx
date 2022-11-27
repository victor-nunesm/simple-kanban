import React from 'react'
import { ButtonProps } from '@mui/material'
import StyledButton from './styles'

export interface IButtonProps extends ButtonProps {}

const Button: React.FC<IButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...(props ?? {})}>{children}</StyledButton>
}

export default Button
export * as ButtonStyles from './styles'
