import { CssBaseline, GlobalStyles } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import './assets/fonts/fonts.css'
import { ThemeProvider } from './contexts/ThemeContext'
import AppRouter from './routes/AppRouter'
import globalStyles from './shared/styles/global'

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles styles={globalStyles} />
      <CssBaseline />
      <RouterProvider router={AppRouter} />
    </ThemeProvider>
  )
}

export default App
