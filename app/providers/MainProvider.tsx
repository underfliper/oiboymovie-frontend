import { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import HeadProvider from './HeadProvider/HeadProvider'

import Layout from '@/components/layout/Layout'

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <HeadProvider>
      <Provider store={store}>
        <Layout>{children}</Layout>
      </Provider>
    </HeadProvider>
  )
}

export default MainProvider
