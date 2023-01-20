import React, { useState, useEffect } from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { MenuItem } from '@mui/material'
import { useRouter } from 'next/router'
type Props = {}

export const SelectLanguage = (props: Props) => {
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
      sx={[
        { '&::before': { borderBottom: 'none', position: 'fixed' } },
        { '&::after': { borderBottom: 'none' } },
        { '&:hover': { border: 'none' } },
        { background: 'rgba(235, 224, 213,.5)', padding: '6px 0px 6px 12px', borderRadius: '50px' },
      ]}
    >
      <MenuItem value="th">TH</MenuItem>
      <MenuItem value="en">EN</MenuItem>
    </Select>
  )
}
