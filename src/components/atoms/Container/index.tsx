import { ContainerProps } from '@mui/material'
import React from 'react'
import StyledContainer from './styles'

export interface IContainerProps extends ContainerProps {}

const Container: React.FC<IContainerProps> = ({ children, ...props }) => {
  return <StyledContainer {...(props ?? {})}>{children}</StyledContainer>
}

export default Container
export * as ContainerStyles from './styles'
