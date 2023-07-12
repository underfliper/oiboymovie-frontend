import { FC } from 'react'
import Navigation from './navigation/Navigation'
import { navigations } from './navigation/navigation.data'

import styles from './sidebar.module.scss'

const Sidebar: FC = () => {
  return (
    <aside className={styles.sidebar}>
      <Navigation items={navigations[0].items} />
      <Navigation isAuth />
    </aside>
  )
}

export default Sidebar
