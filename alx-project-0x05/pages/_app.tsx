import { CountProvider } from '@/context/CounterContext';
import '../app/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/app/layout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  
    <Component {...pageProps}/>
  
)

export  function App({ Component, pageProps }: AppProps) {
  return (
    <CountProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CountProvider>
  )
}

export default MyApp;