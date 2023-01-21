import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import { Grid, MobileStepper, Button } from '@mui/material'
import { display, align, justify, width } from '@/common/utils/styles'
import { HeaderTypography, DescriptionTypography } from './styles'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import { useTheme } from '@mui/material/styles'
import { HEADER_INFO, ANIMATION_STYLE } from './constant'
import { useTranslation } from 'next-i18next'
type Props = {}

export const Header = (props: Props) => {
  const { t } = useTranslation('common')
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState<number>(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const HeaderTextRender = (currentStep: number) => {
    return (
      <div key={currentStep}>
        <HeaderTypography variant="h2" className={ANIMATION_STYLE[currentStep as keyof object].title}>
          {HEADER_INFO(currentStep, t).title}
        </HeaderTypography>
        {HEADER_INFO(currentStep, t).description.map((description: any, index: number) => (
          <DescriptionTypography variant="h5" className={ANIMATION_STYLE[currentStep as keyof object].description[index]} key={index}>
            {description}
          </DescriptionTypography>
        ))}
      </div>
    )
  }

  const HeaderImageRender = (currentStep: number) => {
    return <Image src={HEADER_INFO(currentStep, t).image} alt={HEADER_INFO(currentStep, t).alt} className={ANIMATION_STYLE[currentStep as keyof object].image} style={{ maxWidth: '512px', width: '100%', height: 'auto' }} key={currentStep} />
  }

  return (
    <>
      <Grid container rowSpacing={1}>
        <Grid item xs={24} sx={{ textAlign: 'center' }}>
          {HeaderTextRender(activeStep)}
        </Grid>
        <Grid item xs={24} sx={{ ...display['flex'], ...align['center'], flexDirection: 'column', overflow: 'hidden' }}>
          {HeaderImageRender(activeStep)}
          <div>
            <MobileStepper
              variant="dots"
              steps={3}
              position="static"
              activeStep={activeStep}
              sx={{ maxWidth: 400, background: theme.palette.creamy.main, borderRadius: '20px' }}
              nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
                  Next
                  {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
              }
              backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                  Back
                </Button>
              }
              className="animate__animated animate__fadeIn animate__slow animate__delay-2s"
            />
          </div>
        </Grid>
      </Grid>
    </>
  )
}
