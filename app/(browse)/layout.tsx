import React from 'react'
import Navbar from './_components/navbar'

const Browselayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
   
    <div className='flex h-[80%] pt-4'>
    <Navbar/>
    {children}
    </div>
   
    </>
  )
}

export default Browselayout