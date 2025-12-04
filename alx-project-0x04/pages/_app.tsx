import '../app/globals.css'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => (
  
    <Component {...pageProps}/>
  
)

export  function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;