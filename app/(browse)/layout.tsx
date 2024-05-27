import React from 'react'
import Navbar from './_components/navbar'
import SideBar from './_components/siderbar'
import Container from './_components/Container'

const Browselayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
      <Navbar/>
    <div className='flex h-[80%] pt-4'>
    <SideBar/>
    <Container>
    {children}
    </Container>
  
    </div>
   
    </>
  )
}

export default Browselayout