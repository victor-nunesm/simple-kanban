import { GridProps } from '@mui/material'
import React from 'react'
import StyledGrid from './styles'

export interface IGrid extends GridProps {}

const Grid: React.FC<IGrid> = ({ children, ...rest }) => {
  return <StyledGrid {...(rest ?? {})}>{children ?? ''}</StyledGrid>
}

export default Grid
