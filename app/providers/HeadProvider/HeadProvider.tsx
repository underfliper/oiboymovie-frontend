import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

import Favicons from './Favicons'

const HeadProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0"
        />

        <Favicons />

        <meta name="theme-color" content={'#F5F9FA'} />
        <meta name="msapplication-navbutton-color" content={'#F5F9FA'} />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content={'#F5F9FA'}
        />
      </Head>
      {children}
    </>
  )
}

export default HeadProvider
