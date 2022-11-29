import { SwitchProps } from '@mui/material'
import React from 'react'
import useTheme from '../../../hooks/useTheme'
import StyledSwitch from '../Switch'

export interface IThemeSwitcherProps extends SwitchProps {}

const ThemeSwitcher: React.FC<IThemeSwitcherProps> = (props) => {
  const { setTheme, mode } = useTheme()

  return (
    <StyledSwitch
      {...(props ?? {})}
      checked={mode === 'dark'}
      onChange={() => setTheme(mode === 'light' ? 'dark' : 'light')}
    />
  )
}

export default ThemeSwitcher
