export const handleResponsiveFontSize = (theme: any) => {
  theme.typography.h1 = {
    [theme.breakpoints.up('sm')]: {
      ...theme.typography.h1,
      fontSize: '60px',
    },
    [theme.breakpoints.down('sm')]: {
      ...theme.typography.h1,
      fontSize: '42px',
    },
  }
  theme.typography.h2 = {
    [theme.breakpoints.up('sm')]: {
      ...theme.typography.h2,
      fontSize: '34px',
    },
    [theme.breakpoints.down('sm')]: {
      ...theme.typography.h2,
      fontSize: '24px',
    },
  }
  theme.typography.h3 = {
    [theme.breakpoints.up('sm')]: {
      ...theme.typography.h3,
      fontSize: '24px',
    },
    [theme.breakpoints.down('sm')]: {
      ...theme.typography.h3,
      fontSize: '16px',
    },
  }
  theme.typography.h4 = {
    [theme.breakpoints.up('sm')]: {
      ...theme.typography.h4,
      fontSize: '24px',
    },
    [theme.breakpoints.down('sm')]: {
      ...theme.typography.h4,
      fontSize: '16px',
    },
  }
  theme.typography.h5 = {
    [theme.breakpoints.up('sm')]: {
      ...theme.typography.h5,
      fontSize: '20px',
    },
    [theme.breakpoints.down('sm')]: {
      ...theme.typography.h5,
      fontSize: '15px',
    },
  }
}
