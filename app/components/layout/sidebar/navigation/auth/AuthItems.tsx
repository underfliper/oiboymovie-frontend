import { FC } from 'react'
import { useAuth } from '@/hooks/useAuth'

import NavigationItem from '../NavigationItem'
import SignoutButton from './SignoutButton'

const AuthItems: FC = () => {
  const { user } = useAuth()

  return (
    <>
      {user ? (
        <>
          <NavigationItem
            item={{
              icon: <i className="icon-filled-star" />,
              link: '/reviewed-movies',
              title: 'Reviewed Movies',
            }}
          />
          <NavigationItem
            item={{
              icon: <i className="icon-person" />,
              link: '/profile',
              title: 'Profile',
            }}
          />
          <SignoutButton />
        </>
      ) : (
        <NavigationItem
          item={{
            icon: <i className="icon-signin" />,
            link: '/signin',
            title: 'Sign in',
          }}
        />
      )}
    </>
  )
}

export default AuthItems
