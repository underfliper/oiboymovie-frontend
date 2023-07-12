import { FC } from 'react'
import { useTheme } from 'next-themes'
import Toggle from '@/ui/toggle/Toggle'

import styles from './themeToggle.module.scss'

const ThemeToggle: FC = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={styles.themeToggle}>
      {theme === 'light' ? 'Dark' : 'Light'} mode
      <Toggle
        value={theme === 'light' ? false : true}
        handleToggle={toggleTheme}
      />
    </div>
  )
}

export default ThemeToggle
