import React from 'react'
import { UserButton } from '@clerk/nextjs'


import { authorFont, outfitFont, satoshiFont } from './font'


const page = () => {
  return (
    <>
    <div className='mx-10 my-10 '>
    <UserButton afterSignOutUrl='/sign-in'/>
    </div>
   
    </>
  
  )
}

export default page