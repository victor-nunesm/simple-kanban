import { createTheme } from '@mui/material/styles'
import commonThemeOpts from './commonOptions'

const lightTheme = createTheme({
  ...commonThemeOpts,
  palette: {
    primary: {
      main: '#0C80D8',
      dark: '#5f5f5f',
    },
    secondary: {
      main: '#ed6a5a',
    },
    background: {
      default: '#e8e8e8',
      paper: '#ebebeb',
    },
    text: {
      primary: '#000000e5',
    },
    error: {
      main: '#f91c09f4',
    },
    mode: 'light',
  },
})

export default lightTheme
