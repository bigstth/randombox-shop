import DogWow from '@/public/images/header/dog-wow.png'
import DogPresent from '@/public/images/header/dog-present.png'
import DogShop from '@/public/images/header/dogtheme.png'
export const HEADER_INFO = (currentStep: number, t: any) => {
  const headers = [
    {
      title: t('header.firstHeader.title'),
      description: t('header.firstHeader.description', { returnObjects: true }),
      image: DogWow,
      alt: t('header.firstHeader.imageAlt'),
    },
    {
      title: t('header.secondHeader.title'),
      description: t('header.secondHeader.description', { returnObjects: true }),
      image: DogPresent,
      alt: t('header.secondHeader.imageAlt'),
    },
    {
      title: t('header.thirdHeader.title'),
      description: t('header.thirdHeader.description', { returnObjects: true }),
      image: DogShop,
      alt: t('header.thirdHeader.imageAlt'),
    },
  ]
  return headers[currentStep]
}

export const ANIMATION_STYLE: any = {
  0: {
    title: 'animate__animated animate__backInDown animate__slow',
    description: ['animate__animated animate__bounceInLeft animate__slow ', 'animate__animated animate__bounceInRight animate__slow '],
    image: 'animate__animated animate__bounceIn animate__slow animate__delay-1s',
  },
  1: {
    title: 'animate__animated animate__backInDown animate__slow',
    description: ['animate__animated animate__bounceInLeft animate__slow ', 'animate__animated animate__bounceInRight animate__slow '],
    image: 'animate__animated animate__bounceIn animate__slow animate__delay-1s',
  },
  2: {
    title: 'animate__animated animate__backInDown animate__slow',
    description: ['animate__animated animate__bounceInLeft animate__slow ', 'animate__animated animate__bounceInRight animate__slow '],
    image: 'animate__animated animate__bounceIn animate__slow animate__delay-1s',
  },
}
