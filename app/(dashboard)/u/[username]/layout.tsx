import { getselfByUsername } from '@/lib/auth-service'
import { redirect } from 'next/navigation'
import React, { Children } from 'react'
import Navbar from './(home)/_components/navbar'
import Sidebar from './(home)/_components/Sidebar'
import Container from './(home)/container'


interface CreatorPageProps{
    params:{
        username:string
    }
    children:React.ReactNode
}
const CreatorPage = async({params,children}:CreatorPageProps) => {
    const user = await getselfByUsername(params.username)
    console.log(params)
if(!user){
    redirect("/")
}
  return (
    <>
    <Navbar/>
       <div className='flex h-full pt-20'>
    
        <Sidebar/>
        <Container>
        {children}
        </Container>
      
        </div>
    </>
   
  )
}

export default CreatorPage