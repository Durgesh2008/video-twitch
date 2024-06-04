"use client"
import React from 'react'
import {LucideIcon} from 'lucide-react'
import { CreatorSidebar } from '@/store/use-creatotSidebar'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { outfitFont } from '@/app/font'
import { Skeleton } from '@/components/ui/skeleton'
interface NavItemProps{
    route:{
        label:string
        href:string
        icon:LucideIcon
    }
    isActive:boolean
   
}
 
const NavItem = ({route,isActive}:NavItemProps) => {
    const {collapsed} = CreatorSidebar((state)=>state)
   const {icon:Icon,label,href} = route
  return (
<Button
asChild
value="ghost"
className={cn("w-full h-12 text-foreground",
    collapsed ? "justify-center":"justify-start",
    isActive && "bg-white rounded text-blue-400"
)}
>
    <Link href={href}>
        <div className='flex items-center gap-x-4'>
        <Icon className={cn(
            "h-4 w-4",collapsed?"mr-0":"mr-2"
        )}/>
        {
            !collapsed && <span className={outfitFont.className}>
                {label}
            </span>
        }
        </div>
    </Link>
</Button>
  )
}

export default NavItem

export const NavItemSkeleton = ()=>{

    return(
<li className='flex items-center gap-x-4 px-3 py-2'>
    <Skeleton className='min-h-[48px] min-w-[48px] rounded-md'/>
    <div className='flex-1 hidden lg:block'>
<Skeleton className='h-6'/>
    </div>

</li>
    )
}