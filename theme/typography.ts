import { Palette } from '@mui/material/styles'
import { TypographyOptions } from '@mui/material/styles/createTypography'

export const defaultTypography: TypographyOptions | ((palette: Palette) => TypographyOptions) | undefined = {
  button: {
    textTransform: 'none',
    fontFamily: `'Mali','Kanit','Roboto'`,
  },
  h1: {
    fontSize: '60px',
    fontWeight: 400,
    letterSpacing: '0.5px',
    lineHeight: '98px',
    fontFamily: `'Mali','Kanit','Roboto'`,
  },
  h2: {
    fontSize: '34px',
    fontWeight: 400,
    letterSpacing: '0.25px',
    lineHeight: '54px',
    fontFamily: `'Mali','Kanit','Roboto'`,
  },
  h3: {
    fontSize: '24px',
    fontWeight: 700,
    letterSpacing: '0.15px',
    lineHeight: '40px',
    fontFamily: `'Mali','Kanit','Roboto'`,
  },
  h4: {
    fontSize: '24px',
    fontWeight: 500,
    letterSpacing: '0.15px',
    lineHeight: '40px',
    fontFamily: `'Mali','Kanit','Roboto'`,
  },
  h5: {
    fontSize: '20px',
    fontWeight: 400,
    letterSpacing: '0.15px',
    lineHeight: '34px',
    fontFamily: `'Mali','Kanit','Roboto'`,
  },
  h6: {
    fontSize: '20px',
    fontWeight: 700,
    letterSpacing: '0.15px',
    lineHeight: '34px',
    fontFamily: `'Mali','Kanit','Roboto'`,
  },
  h7: {
    fontSize: '16px',
    fontWeight: 700,
    letterSpacing: '0.15px',
    lineHeight: '28px',
  },
  h8: {
    fontSize: '14px',
    fontWeight: 700,
    letterSpacing: '0.15px',
    lineHeight: '26px',
  },
}
