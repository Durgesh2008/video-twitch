"use client"
import { onFollow, onUnFollow } from '@/actions/follow'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { useState, useTransition } from 'react'
import { toast } from 'sonner'

interface ActionProps{
    isFollowing:boolean
    userid:string
}

const Action = ({isFollowing,userid}:ActionProps) => {
    const [isPending,startTransition ] = useTransition()
    
    const handleFollow = ()=>{
        startTransition(()=>{
            onFollow(userid)
            .then((data)=>toast.success(`you are now following ${data.following.username}`))
            .catch(()=>toast.error("soming went wrong"))
        })
       
    }

    const handleUnfollow = ()=>{
        startTransition(()=>{
            onUnFollow(userid)
            .then(
                (data)=>{
                  return  toast.success(`you are now unfollowing ${data.following.username}`)
                }
            )
            .catch(
                (err)=>{
                    return (toast.error(err))
                }
            )
        })
    }
   
    const onClick = ()=>{
  if (isFollowing) {
    handleUnfollow()
  }else{
    handleFollow()
  }
    }
  return (
   <Button 
    disabled = {isPending }
     variant={`${isFollowing ? 'destructive':'primary'}` }
     onClick={ onClick}>
    {
        isPending &&  <Loader2 className="mr-2  h-4 w-4 animate-spin" />
    }
   { isFollowing ? "Unfollow":"Follow"}
   </Button>
  )
}

export default Action