import { useContextSelector } from 'use-context-selector'
import { ThemeContext } from '../contexts/ThemeContext'

export default function useTheme() {
  const theme = useContextSelector(ThemeContext, (theme) => theme.theme)
  const mode = useContextSelector(ThemeContext, (theme) => theme.mode)
  const setTheme = useContextSelector(ThemeContext, (theme) => theme.setTheme)

  return {
    theme,
    mode,
    setTheme,
  }
}
