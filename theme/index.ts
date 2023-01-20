import { Components, createTheme as muiCreateTheme, Theme, experimental_sx as sx } from '@mui/material'
import { defaultPalette } from './palette'
import { defaultTypography } from './typography'
declare module '@mui/material/styles' {
  interface TypographyVariants {
    h7: React.CSSProperties
    h8: React.CSSProperties
  }
  interface TypographyVariantsOptions {
    h7: React.CSSProperties
    h8: React.CSSProperties
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h7: true
    h8: true
  }
}

type ThemeName = 'default'
export const createTheme = (theme: ThemeName) => {
  return muiCreateTheme({
    palette: defaultPalette,
    typography: defaultTypography,
  })
}
