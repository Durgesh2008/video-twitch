import React from 'react'
import logo from "@/public/logo.png"
import Image from 'next/image'
import Link from 'next/link'
const Logo = () => {
  return (
    <Link href="/" className='hidden items-center justify-center  w-[33px] h-[33px] hover:scale-150 transition cursor-pointer lg:flex'>
    <Image
        src={logo}
        alt='App Logo'
        width={33}
        height={3}
    />
</Link>

  )
}

export default Logo