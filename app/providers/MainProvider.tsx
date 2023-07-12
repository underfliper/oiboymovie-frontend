import { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import HeadProvider from './HeadProvider/HeadProvider'
import { store } from '@/store/store'

import Layout from '@/components/layout/Layout'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <HeadProvider>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <Layout>{children}</Layout>
          </QueryClientProvider>
        </Provider>
      </HeadProvider>
    </ThemeProvider>
  )
}

export default MainProvider
