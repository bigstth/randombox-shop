import React from 'react'
import Link from 'next/link'
import styles from '@/styles/TopMenu.module.css'
import { width } from '@/common/utils/styles'
import { MENU } from '@/common/layouts/menu'
import { useTranslation } from 'next-i18next'
import { Button, Typography } from '@mui/material'
import { MenuBar, MenuBarItem } from './styles'
type Props = {}

export const CustomMenuBar = (props: Props) => {
  const { t } = useTranslation('common')
  return (
    <MenuBar>
      {MENU(t).map((menu) => (
        <MenuBarItem className={styles.menuItem} key={menu.name}>
          <Button color="primary" href={menu.url} component={Link} sx={width[100]}>
            <Typography variant="h8">{menu.name}</Typography>
          </Button>
        </MenuBarItem>
      ))}
    </MenuBar>
  )
}
