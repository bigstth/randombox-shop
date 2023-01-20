import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button, AppBar, Container, Grid, Typography, useTheme } from '@mui/material'
import styles from '@/styles/TopMenu.module.css'
import styled from '@emotion/styled'
import logo from '@/public/images/logo.png'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { width, display, justify, align } from '@/common/utils/styles'
import { CustomDrawer, CustomMenuBar, SelectLanguage } from '@/modules/layouts/default-layout/'

type Props = { t: any; i18n: any }

export default function TopMenu({ t, i18n }: Props) {
  const theme = useTheme()
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)

  const AppBarStyle = styled(AppBar)`
    height: 90px;
    margin-bottom: 16px;
    background: ${theme.palette.skysea.main};
  `

  const handleDrawerOpen = () => {
    setDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
  }

  return (
    <AppBarStyle position="sticky">
      <Container maxWidth="lg" sx={{ minHeight: '100%', ...display['flex'], ...align['center'] }}>
        <Grid container spacing={1} sx={width[100]}>
          <Grid item xs={5} sm={7} lg={2}>
            <Link href={'/'}>
              <Image src={logo} alt="logo" width="180" height="60" />
            </Link>
          </Grid>
          <Grid item xs={0} lg={7} sx={align['center']} display={{ xs: 'none', sm: 'none', md: 'none', lg: 'flex' }}>
            <CustomMenuBar />
          </Grid>
          <Grid item xs sm={1} lg={1} sx={{ ...display['flex'], ...justify['end'], ...align['center'] }}>
            <SelectLanguage />
          </Grid>
          <Grid item lg={2} display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} sx={{ ...justify['end'], ...align['center'] }}>
            <Button color="secondary" variant="contained" href="/create-shop" component={Link} className={styles.callToActionButton}>
              <Typography color={theme.palette.text.primary} variant="h8">
                {t('menu.createShop')}
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={1} sm={1} display={{ xs: 'flex', sm: 'flex', md: 'flex', lg: 'none' }} sx={{ ...justify['end'], ...align['center'] }}>
            <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerOpen} sx={{ ...(drawerOpen ? display['none'] : display['flex']) }}>
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>
        <CustomDrawer drawerOpen={drawerOpen} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />
      </Container>
    </AppBarStyle>
  )
}
