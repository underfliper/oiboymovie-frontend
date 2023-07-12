import { FC } from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames'
import Link from 'next/link'

import { INavigationItem } from './navigation.types'

import styles from './navigation.module.scss'

const NavigationItem: FC<{ item: INavigationItem }> = ({ item }) => {
  const { asPath } = useRouter()

  return (
    <li
      className={cn({
        [styles.navigation_item]: true,
        [styles.active]: asPath === item.link,
      })}>
      <Link href={item.link}>
        {item.icon} <span>{item.title}</span>
      </Link>
    </li>
  )
}

export default NavigationItem
