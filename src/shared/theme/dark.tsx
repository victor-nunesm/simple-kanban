import { createTheme } from '@mui/material/styles'
import commonThemeOpts from './commonOptions'

const darkTheme = createTheme({
  ...commonThemeOpts,
  palette: {
    primary: {
      main: '#0c80d8',
      dark: '#152738',
      50: '#e2f0fa',
      100: '#b6d9f3',
      200: '#86c0ec',
      300: '#55a6e4',
      400: '#3093de',
      500: '#0c80d8',
      600: '#0a78d4',
      700: '#086dce',
      800: '#0663c8',
      900: '#0350bf',
      A100: '#e7f0ff',
      A200: '#b4ceff',
      A400: '#81adff',
      A700: '#689dff',
    },
    secondary: {
      main: '#ed6a5a',
    },
    background: {
      default: '#0A1929',
      paper: '#001E3B',
    },
    text: {
      primary: '#f5f5f5e5',
    },
    error: {
      main: '#f91c09f4',
    },
    mode: 'dark',
  },
})

export default darkTheme
