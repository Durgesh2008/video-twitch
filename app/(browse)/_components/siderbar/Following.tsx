"use client"
import { satoshiFont } from '@/app/font'
import { useSidebar } from '@/store/use-sidbar'
import { Follow, User } from '@prisma/client'
import React from 'react'
import UserItem, { UserItemSkeleton } from './UserItem'
interface FollowingProps{
    data: (Follow & {following:User})[]
}
const Following = ({data}:FollowingProps) => {
    const { collapsed } = useSidebar((state) => state);
 const showLoabel = !collapsed && data.length > 0;
    if (!data.length){
        return null
    }
   
  return (
   <>
     {showLoabel && (
        <div className="pl-6 mb-4">
          <p
            className={`text-sm text-muted-foreground ${satoshiFont.className}`}
          >
            Following
          </p>
        </div>
      )
      }
        <ul className="space-y-2 px-2">
        {data?.map((ele) =>
            <UserItem key={ele.following.id} 
            username={ele.following.username}
             profilepic={ele.following.imageUrl} 
            />)}
      </ul>
   </>
  )
}


export default Following

export const FollowingSkeleton = ()=>{
    return(
        <ul className="px-2">
    {
      [...Array(3)].map((_,i)=>{
        return(
          <UserItemSkeleton key={i}/>
        )
      })
    
    }
      </ul>
    )
}