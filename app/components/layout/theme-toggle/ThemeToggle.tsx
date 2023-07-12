import { FC } from 'react'
import Toggle from '@/ui/toggle/Toggle'

import styles from './themeToggle.module.scss'

const ThemeToggle: FC = () => {
  const toggleTheme = () => {
    // Add theme toggle logic
  }

  return (
    <div className={styles.themeToggle}>
      Dark mode
      <Toggle handleToggle={toggleTheme} />
    </div>
  )
}

export default ThemeToggle
