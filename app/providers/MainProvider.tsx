import { FC, PropsWithChildren } from 'react'

import HeadProvider from './HeadProvider/HeadProvider'

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
  return <HeadProvider>{children}</HeadProvider>
}

export default MainProvider
