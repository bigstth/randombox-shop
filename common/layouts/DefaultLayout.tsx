import React from 'react'
import TopMenu from './TopMenu'
import { Container } from '@mui/material'
import { useTranslation } from 'next-i18next'

type Props = {
  children: any
}

export default function DefaultLayout({ children }: Props) {
  const { t, i18n } = useTranslation('common')

  return (
    <>
      <TopMenu t={t} i18n={i18n} />
      <Container maxWidth="lg">{children}</Container>
    </>
  )
}
