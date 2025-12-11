import { CountProvider } from '@/context/CountContext';
import '../app/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layouts/Layout';

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