"use client"
import { useSidebar } from '@/store/use-sidbar'
import React from 'react'
interface WrapperType{
    children:React.ReactNode
}
const Wrapper = ({children}:WrapperType) => {
    const {collapsed} = useSidebar((state)=>state)
  return (
    <aside className={`fixed left-0  flex flex-col h-full bg-[#252731] border-r border-[#2d2e35] z-50 top-20 ${ collapsed ? "w-[70px]":"w-60"} transition-all delay-150 duration-300`}>
    {children}
    </aside>
    
  )
}

export default Wrapper