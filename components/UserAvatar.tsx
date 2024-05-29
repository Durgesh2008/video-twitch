import React from 'react'
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { Avatar, AvatarFallback } from './ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';
import LiveBadge from './Live-Badge';
import { Skeleton } from './ui/skeleton';
interface UserAvatarProps
extends VariantProps<typeof avatarSizes> {
    username: string;
    profilepic: string;
    islive?: boolean;
    showBadge?:boolean
  }
const avatarSizes = cva(
  "",
  {
    variants:{
      size:{
        default:"h-8 w-8",
        lg:"h-14 w-14",
        md:"h-10 w-10"
      }
    },
    defaultVariants:{
      size:"default"
    }
  }
)
  
const UserAvatar = ({username,profilepic,islive,showBadge,size}:UserAvatarProps) => {
  const canShowBadage = showBadge && islive


  return (
    <div className='relative'>
   <Avatar 
   className={
    cn(islive && "ring-2 ring-rose-500 border border-background",avatarSizes({size}))
   }
   >
    <AvatarImage src={profilepic} className='object-cover'/>
  <AvatarFallback>
    {username[0]}
    {username[username.length-1]}
  </AvatarFallback>
   
   </Avatar>
   {
    canShowBadage && 
    <div className='absolute -bottom-3 left-1/2 transform -translate-x-1/2'>
      <LiveBadge/>
      </div>
   }
      </div>
  )
}
interface UserAvatarSkeletonProps extends VariantProps <typeof avatarSizes>{}

export const UserAvatarSkeleton = ({
  size
}:UserAvatarSkeletonProps)=>{
return(
  <Skeleton className={cn("rounded-full",avatarSizes({size}))}/>
)
}
export default UserAvatar