import { FC, useState } from 'react'
import Logo from './Logo'
import Search from '../search/Search'
import ThemeToggle from '../theme-toggle/ThemeToggle'

import styles from './header.module.scss'

interface Props {
  className?: string
}

const Header: FC<Props> = ({ className }) => {
  return (
    <header className={className}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.controls}>
        <Search className={styles.search} />
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
