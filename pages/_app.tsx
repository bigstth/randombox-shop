import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '../theme'
import { appWithTranslation } from 'next-i18next'

const App = ({ Component, pageProps }: AppProps) => {
  const theme = createTheme('default')
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Create Online Shop and Random Boxs</title>
          <meta name="description" content="create random box for open and receieve items!" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default appWithTranslation(App)
