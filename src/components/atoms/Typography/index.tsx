import React from 'react'
import { TypographyProps } from '@mui/material'
import StyledTypography from './styles'

export interface ITypographyProps extends TypographyProps {}

const Typography: React.FC<ITypographyProps> = (props) => {
  return <StyledTypography {...(props ?? {})} />
}

export default Typography
export * as TypographyStyles from './styles'
