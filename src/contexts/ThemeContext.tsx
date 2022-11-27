import { Theme, ThemeProvider as MuiThemeProvider } from '@mui/material'
import React, { SetStateAction, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import darkTheme from '../shared/theme/dark'
import lightTheme from '../shared/theme/light'
import usePersistedState from '../shared/utils/usePersistedState'

type ThemeTitle = 'light' | 'dark'

type ThemeContextType = {
  theme: Theme
  mode: ThemeTitle
  setTheme: React.Dispatch<SetStateAction<ThemeTitle>>
}

export const ThemeContext = createContext({} as ThemeContextType)

export function ThemeProvider({ children }: any) {
  const [themeTitle, setThemeTitle] = usePersistedState<ThemeTitle>('themeTitle', 'light')
  const [theme, setTheme] = useState(() => (themeTitle === 'light' ? darkTheme : lightTheme))

  useEffect(() => {
    setTheme(themeTitle === 'light' ? lightTheme : darkTheme)
  }, [themeTitle])

  return (
    <ThemeContext.Provider
      value={{
        mode: themeTitle,
        theme: theme,
        setTheme: setThemeTitle,
      }}
    >
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
