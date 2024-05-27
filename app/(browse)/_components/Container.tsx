"use client"

import { cn } from '@/lib/utils'
import { useSidebar } from '@/store/use-sidbar'
import React, { useEffect } from 'react'
import { useMediaQuery } from 'usehooks-ts'
interface ContainerProps{
    children:React.ReactNode
}
const Container = ({children}:ContainerProps) => {
    const {collapsed,onExapnd,onCollapsed}=useSidebar((state)=>state)
    const matches = useMediaQuery("(max-width:1024px)")

    useEffect(()=>{
 if (matches){
    onCollapsed()
 }else{
    onExapnd()
 }
    },[matches])
  return (
    <div className={cn("flex-1",collapsed?"ml-[70px]":"ml-[70px] lg:ml-60" )}>
        {children}
    </div>
  )
}

export default Container