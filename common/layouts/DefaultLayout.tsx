import React, { useState } from 'react'
import TopMenu from './TopMenu'
import { Container } from '@mui/material'
import { useTranslation } from 'next-i18next'
import Loading from '@/common/components/loading'

type Props = {
  children: any
  isPageLoading?: boolean
}

export default function DefaultLayout({ children, isPageLoading }: Props) {
  const { t, i18n } = useTranslation('common')

  return (
    <div style={{ overflowX: 'hidden' }}>
      {isPageLoading ? (
        <Loading />
      ) : (
        <>
          <TopMenu t={t} i18n={i18n} />
          <Container maxWidth="lg">{children}</Container>
        </>
      )}
    </div>
  )
}
