import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '../theme'
import { appWithTranslation, useTranslation } from 'next-i18next'
import 'animate.css'
import { handleResponsiveFontSize } from '@/common/utils/font-size'
const App = ({ Component, pageProps }: AppProps) => {
  const { t } = useTranslation('common')
  const theme = createTheme('default')
  handleResponsiveFontSize(theme)
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>{t('general.title')}</title>
          <meta name="description" content="สร้างร้านค้าออนไลน์ ขายสินค้าออนไลน์ พร้อมกับฟีเจอร์กล่องสุ่ม" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default appWithTranslation(App)
