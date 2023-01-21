import { Components, createTheme as muiCreateTheme, Theme, experimental_sx as sx } from '@mui/material'
import { defaultPalette } from './palette'
import { defaultTypography } from './typography'
interface ITextPalette {
  dark?: string
  main: string
  light?: string
  disable?: string
}
interface ITypography {
  fontSize?: string
  fontWeight?: number
  letterSpacing?: string
  lineHeight?: string
  fontFamily?: string
}

interface IIconPalette {
  hover: string
  main: string
  disable: string
}

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

declare module '@mui/material/styles' {
  interface Palette {
    // feedback color
    black: Palette['primary']
    white: Palette['primary']
    gray: Palette['primary']

    // text color
    skysea: ITextPalette
    dilute: ITextPalette
    creamy: ITextPalette
    textBlack: ITextPalette
    textWhite: ITextPalette

    // icon color
    icon: IIconPalette
    iconWhite: IIconPalette
  }

  interface PaletteOptions {
    // feedback color
    black?: PaletteOptions['primary']
    white?: PaletteOptions['primary']
    gray?: PaletteOptions['primary']

    // text color
    skysea?: ITextPalette
    dilute?: ITextPalette
    creamy?: ITextPalette
    textBlack?: ITextPalette
    textWhite?: ITextPalette

    // icon color
    icon?: IIconPalette
    iconWhite?: IIconPalette
  }
}

type ThemeName = 'default'
export const createTheme = (theme: ThemeName) => {
  return muiCreateTheme({
    palette: defaultPalette,
    typography: defaultTypography,
  })
}
