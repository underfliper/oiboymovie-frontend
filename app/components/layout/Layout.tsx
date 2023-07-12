import { FC, PropsWithChildren } from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

import styles from './layout.module.scss'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header className={styles.header} />
      <main className={styles.main}>
        <Sidebar />
        <div className={styles.content}>{children}</div>
      </main>
    </>
  )
}

export default Layout
