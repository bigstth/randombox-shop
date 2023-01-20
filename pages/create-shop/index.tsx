import React from 'react'
import DefaultLayout from '@/common/layouts/DefaultLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

type Props = { t: any }
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
export default function index({ t }: Props) {
  return <DefaultLayout>create</DefaultLayout>
}
