import { FC, MouseEvent } from 'react'

import styles from '../navigation.module.scss'
import { useActions } from '@/hooks/useActions'

const LogoutButton: FC = () => {
  const { logout } = useActions()

  const logoutHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    logout()
  }

  return (
    <li className={styles.navigation_item}>
      <a onClick={logoutHandler}>
        <i className="icon-signout" />
        <span>Sign Out</span>
      </a>
    </li>
  )
}

export default LogoutButton
