"use client"

import { cn } from "@/lib/utils"
import { CreatorSidebar } from "@/store/use-creatotSidebar"
import { useEffect } from "react"
import { useMediaQuery } from "usehooks-ts"

interface ContainerProps{
    children:React.ReactNode
}
const Container = ({children}:ContainerProps) => {
    const {
        collapsed,onExapnd,onCollapsed
    } = CreatorSidebar((state)=>state)

    const matches = useMediaQuery(`(max-width: 1024px)`)

    useEffect(()=>{
    if(matches){
        onCollapsed()
    }else{
        onExapnd()
    }
    },[matches])

  return (
    <div className={cn("flex-1",
        collapsed?"ml-[70px]":"ml-[70px] lg:ml-60","transition-all  delay-150 duration-300"
    )}>
       {children}
    </div>
  )
}

export default Container