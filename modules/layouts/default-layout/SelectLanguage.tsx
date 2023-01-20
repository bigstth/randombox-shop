import React, { useState, useEffect } from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { MenuItem, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useTheme } from '@mui/material'
type Props = {}

export const SelectLanguage = (props: Props) => {
  const theme = useTheme()
  const [language, setLanguage] = useState<string>('th')
  const router = useRouter()
  useEffect(() => {
    const lang = getLang()
    setLanguage(lang)
  }, [])

  const getLang = () => {
    const localStorageLang = localStorage.getItem('lang')
    return localStorageLang ?? 'th'
  }

  const handleChange = (event: SelectChangeEvent) => {
    const { pathname, asPath, query } = router
    const locale = event.target.value
    setLanguage(locale as string)
    router.push({ pathname, query }, asPath, { locale: locale })
    localStorage.setItem('lang', locale)
  }

  return (
    <Select
      value={language}
      label="Language"
      variant="standard"
      onChange={handleChange}
      IconComponent={() => null}
      inputProps={{ sx: { paddingRight: '16px !important' } }}
      renderValue={(value) => (
        <Typography variant="h8" color={theme.palette.textBlack.dark}>
          {value.toUpperCase()}
        </Typography>
      )}
      sx={[
        { '&::before': { borderBottom: 'none', position: 'fixed' } },
        { '&::after': { borderBottom: 'none' } },
        { '&:hover': { border: 'none' } },
        { background: 'rgba(235, 224, 213,.5)', padding: '6px 0px 6px 12px', borderRadius: '50px' },
      ]}
    >
      <MenuItem value="th">
        <Typography variant="h8" color="primary">
          TH
        </Typography>
      </MenuItem>
      <MenuItem value="en">
        <Typography variant="h8" color="primary">
          EN
        </Typography>
      </MenuItem>
    </Select>
  )
}
