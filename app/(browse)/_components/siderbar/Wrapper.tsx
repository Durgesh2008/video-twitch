"use client"
import { useSidebar } from '@/store/use-sidbar'
import React, { useEffect, useState } from 'react'
import { ToggleSkeloton } from './Toggle'
import { RecommendedSkeleton } from './Recommened'
interface WrapperType{
    children:React.ReactNode
}
const Wrapper = ({children}:WrapperType) => {
    const {collapsed} = useSidebar((state)=>state)
    const [isCLient,setIsClient] = useState(false)

    useEffect(()=>{
      setIsClient(true)
    })
    if (!isCLient) return (
      <aside className={`fixed left-0  flex flex-col h-full bg-[#252731] border-r border-[#2d2e35] z-50 top-20 w-[70px] lg:w-60 transition-all delay-150 duration-300`}>
        <ToggleSkeloton/>
        <RecommendedSkeleton/>
      </aside>
    );
  return (
    <aside className={`fixed left-0  flex flex-col h-full bg-[#252731] border-r border-[#2d2e35] z-50 top-20 ${ collapsed ? "w-[70px]":"w-60"} transition-all delay-150 duration-300`}>
    {children}
    </aside>
    
  )
}

export default Wrapper