import Image from 'next/image'
import React from 'react'

const LogoMenu = () => {
  return (
    <div className='flex justify-center'>
        <Image priority width={64} height={64} src="/images/logo-store.png" alt='/images/logo-store.png'/>
    </div>
  )
}

export default LogoMenu