import React from 'react'
import DefaultLayout from '@/common/layouts/DefaultLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Header } from '@/modules/home'
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
export default function Home() {
  return (
    <DefaultLayout>
      <Header />
    </DefaultLayout>
  )
}
