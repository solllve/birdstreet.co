import { ReactElement, createContext } from 'react'
import { ThemeEnum } from '../../consts/types'
import { useThemeSwitch } from '../../hooks/Theme/useThemeSwitch'

interface ThemeWrapperProps {
  children: ReactElement
}
export const ThemeContext = createContext({
  theme: ThemeEnum.DARK,
})

export const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const { theme } = useThemeSwitch()
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  )
}
