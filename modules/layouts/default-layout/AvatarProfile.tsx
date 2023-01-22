import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import DogProfile from '@/public/images/profile.png'
import { ProfileBox, LoginText } from './styles'
import { useTranslation } from 'next-i18next'
type Props = {}

export const AvatarProfile = (props: Props) => {
  const { t } = useTranslation('common')
  return (
    <Link href="/login">
      <ProfileBox>
        <Image src={DogProfile} alt="เข้าสู่ระบบ woofygoofy" width={48} height={48} />
        <LoginText variant="h8">{t('general.signIn')}</LoginText>
      </ProfileBox>
    </Link>
  )
}
