import { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'next-themes'
import HeadProvider from './HeadProvider/HeadProvider'
import { store } from '@/store/store'

import Layout from '@/components/layout/Layout'

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <HeadProvider>
        <Provider store={store}>
          <Layout>{children}</Layout>
        </Provider>
      </HeadProvider>
    </ThemeProvider>
  )
}

export default MainProvider
