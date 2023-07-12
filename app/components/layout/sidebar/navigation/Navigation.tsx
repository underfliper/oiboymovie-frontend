import { FC } from 'react'
import dynamic from 'next/dynamic'
import NavigationItem from './NavigationItem'

import { INavigation } from './navigation.types'

import styles from './navigation.module.scss'

const DynamicAuthItems = dynamic(() => import('./auth/AuthItems'), {
  ssr: false,
})

const Navigation: FC<INavigation> = ({ items, isAuth }) => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation_list}>
        {items?.map((item) => (
          <NavigationItem key={item.link} item={item} />
        ))}
        {!items && isAuth ? <DynamicAuthItems /> : null}
      </ul>
    </nav>
  )
}

export default Navigation
