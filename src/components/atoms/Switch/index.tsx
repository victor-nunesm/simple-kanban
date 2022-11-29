import React from 'react'
import { SwitchProps } from '@mui/material'
import StyledSwitch from './styles'

export interface ISwitchProps extends SwitchProps {}

const Switch: React.FC<ISwitchProps> = (props) => {
  return <StyledSwitch {...(props ?? {})} />
}

export default Switch
export * as SwitchStyles from './styles'
