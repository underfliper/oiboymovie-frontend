import { ReactNode } from 'react'

export interface INavigationItem {
  icon: ReactNode
  title: string
  link: string
}

export interface INavigation {
  items?: INavigationItem[]
  isAuth?: boolean
}
