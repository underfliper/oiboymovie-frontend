import { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import HeadProvider from './HeadProvider/HeadProvider'

import { store } from '@/store/store'

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <HeadProvider>
      <Provider store={store}>{children}</Provider>
    </HeadProvider>
  )
}

export default MainProvider
