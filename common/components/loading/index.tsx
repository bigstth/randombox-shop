import React from 'react'
import Image from 'next/image'
import LoadingImage from '@/public/images/loading.png'

type Props = {}

export default function index({}: Props) {
  return (
    <div style={{ position: 'absolute', width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Image src={LoadingImage} width={300} height={300} alt="loading" className="animate__animated animate__pulse slow animate__infinite"></Image>
    </div>
  )
}
