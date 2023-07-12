import { INavigation } from './navigation.types'

const mainNav: INavigation = {
  items: [
    { icon: <i className="icon-home" />, link: '/', title: 'Home' },
    {
      icon: <i className="icon-chart" />,
      link: '/top-charts',
      title: 'Top Charts',
    },
    { icon: <i className="icon-pallet" />, link: '/genres', title: 'Genres' },
    {
      icon: <i className="icon-clapper-board" />,
      link: '/new-release',
      title: 'New Release',
    },
  ],
}

const authNav: INavigation = { items: [] }

export const navigations: INavigation[] = [mainNav, authNav]
