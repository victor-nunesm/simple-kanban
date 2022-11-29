import { BoxProps } from '@mui/material'
import React from 'react'
import StyledBox from './styles'

export interface IBox extends BoxProps {}

const Box: React.FC<IBox> = ({ children, ...rest }) => {
  return <StyledBox {...(rest ?? {})}>{children ?? ''}</StyledBox>
}

export default Box
