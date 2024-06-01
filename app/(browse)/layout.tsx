import React, { Suspense } from 'react'
import Navbar from './_components/navbar'
import SideBar, { SideBarSkeleton } from './_components/siderbar'
import Container from './_components/Container'

const Browselayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
      <Navbar/>
    <div className='flex h-[80%] pt-4'>
      <Suspense fallback={<SideBarSkeleton/>}>
      <SideBar/>
      </Suspense>
  
    <Container>
    {children}
    </Container>
  
    </div>
   
    </>
  )
}

export default Browselayout