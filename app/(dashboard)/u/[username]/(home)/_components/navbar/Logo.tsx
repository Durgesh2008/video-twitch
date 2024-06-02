import React from 'react'
import logo from "@/public/logo.png"
import Image from 'next/image'
import Link from 'next/link'
const Logo = () => {
  return (
    <Link href="/" className='flex mr-5 lg:n=mr-0 items-center justify-center  w-[33px] h-[33px] hover:scale-150 transition cursor-pointer '>
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