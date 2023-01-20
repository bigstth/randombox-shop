import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button, AppBar, Container, Grid, Typography, MenuItem } from '@mui/material'
import styles from '@/styles/TopMenu.module.css'
import styled from '@emotion/styled'
import logo from '@/public/images/logo.png'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useRouter } from 'next/router'

const AppBarStyle = styled(AppBar)`
  height: 90px;
  margin-bottom: 16px;
`
const MenuBar = styled.ul`
  display: flex;
  list-style: none;
  background: #fff;
  height: 50px;
  border-radius: 50px 50px 50px 50px;
  overflow: hidden;
`
const MenuBarItem = styled.li`
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-item: center;
`
type Props = { t: any; i18n: any }

export default function TopMenu({ t, i18n }: Props) {
  const [language, setLanguage] = useState<string>('th')
  const router = useRouter()

  useEffect(() => {
    const lang = getLang()
    console.log(i18n.language, 'xx')
    setLanguage(lang)
  }, [])

  const MENU = [
    {
      name: t('menu.home'),
      url: '/',
    },
    {
      name: t('menu.package'),
      url: '/package',
    },
    {
      name: t('menu.faq'),
      url: '/about-us',
    },
    {
      name: t('menu.aboutUs'),
      url: '/about-us',
    },
    {
      name: t('menu.contactUs'),
      url: '/contact-us',
    },
  ]

  const handleChange = (event: SelectChangeEvent) => {
    const locale = event.target.value
    setLanguage(locale as string)
    router.push(router.pathname, router.pathname, { locale: locale })
    localStorage.setItem('lang', locale)
  }

  const getLang = () => {
    const localStorageLang = localStorage.getItem('lang')
    return localStorageLang ?? 'th'
  }

  return (
    <AppBarStyle position="sticky">
      <Container maxWidth="lg" sx={{ minHeight: '100%', display: 'flex', alignItems: 'center' }}>
        <Grid container spacing={1}>
          <Grid item xs={0} lg={2}>
            <Link href={'/'}>
              <Image src={logo} alt="logo" width="180" height="60" />
            </Link>
          </Grid>
          <Grid item xs={0} lg={7} sx={{ alignItems: 'center' }} display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}>
            <MenuBar>
              {MENU.map((menu) => (
                <MenuBarItem className={styles.menuItem} key={menu.name}>
                  <Button color="primary" href={menu.url} component={Link} sx={{ width: '100%' }}>
                    <Typography variant="h8">{menu.name}</Typography>
                  </Button>
                </MenuBarItem>
              ))}
            </MenuBar>
          </Grid>
          <Grid item xs={0} lg={1} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
            <Select
              value={language}
              label="Language"
              variant="standard"
              onChange={handleChange}
              IconComponent={() => null}
              inputProps={{ sx: { paddingRight: '16px !important' } }}
              sx={[
                { '&::before': { borderBottom: 'none', position: 'fixed' } },
                { '&::after': { borderBottom: 'none' } },
                { '&:hover': { border: 'none' } },
                { background: 'rgba(255,255,255,1)', padding: '6px 0px 6px 12px', borderRadius: '50px' },
              ]}
            >
              <MenuItem value="th">TH</MenuItem>
              <MenuItem value="en">EN</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={0} lg={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Button color="secondary" variant="contained" href="/create-shop" component={Link} className={styles.callToActionButton}>
              <Typography variant="h8">{t('menu.createShop')}</Typography>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </AppBarStyle>
  )
}
