import DefaultLayout from '@/common/layouts/DefaultLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
export default function Home() {
  return <DefaultLayout>home</DefaultLayout>
}
