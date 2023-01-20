import React, { useState } from 'react'
import { Button, Grid, Typography, Drawer } from '@mui/material'
import { width, display, justify, align } from '@/common/utils/styles'
import CloseIcon from '@mui/icons-material/Close'
import Link from 'next/link'
import { MENU } from '@/common/layouts/menu'
import styles from '@/styles/TopMenu.module.css'
import { useTranslation } from 'next-i18next'

type Props = {
  drawerOpen: boolean
  handleDrawerOpen: () => void
  handleDrawerClose: () => void
}

export const CustomDrawer = ({ drawerOpen, handleDrawerOpen, handleDrawerClose }: Props) => {
  const { t } = useTranslation('common')

  return (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={handleDrawerClose}
      PaperProps={{
        sx: {
          background: '#ede5dd',
        },
      }}
    >
      <Grid container sx={{ width: '75vw' }}>
        <Grid item sx={{ ...width[100], borderBottom: '2px dashed rgba(89, 43, 24, 0.2)', ...display['flex'], ...justify['end'] }}>
          <CloseIcon fontSize="large" onClick={handleDrawerClose} sx={{ cursor: 'pointer' }} />
        </Grid>
        {MENU(t).map((menu) => (
          <Grid item sx={{ ...width[100], borderBottom: '2px dashed rgba(89, 43, 24, 0.2)', ...display['flex'], ...justify['center'] }} key={menu.name}>
            <Button color="primary" variant="contained" href={menu.url} component={Link} sx={{ ...width[75], m: 2 }}>
              {menu.name}
            </Button>
          </Grid>
        ))}
        <Grid item sx={{ ...width[100], borderBottom: '2px dashed rgba(89, 43, 24, 0.2)', ...display['flex'], ...justify['center'] }}>
          <Button color="secondary" variant="contained" href="/create-shop" component={Link} className={styles.callToActionButton} sx={{ ...width[75], m: 2 }}>
            <Typography variant="h8">{t('menu.createShop')}</Typography>
          </Button>
        </Grid>
      </Grid>
    </Drawer>
  )
}
