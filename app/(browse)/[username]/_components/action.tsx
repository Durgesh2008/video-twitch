"use client"
import { onBlock, onUnBlock } from '@/actions/block'
import { onFollow, onUnFollow } from '@/actions/follow'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { notFound } from 'next/navigation'
import { useState, useTransition } from 'react'
import { toast } from 'sonner'

interface ActionProps{
    isFollowing:boolean
    isBlockingByThisUser:boolean
    isBlocking:boolean
    userid:string
}

const Action = ({isFollowing,isBlockingByThisUser,isBlocking,userid}:ActionProps) => {
    const [isPending,startTransition ] = useTransition()
    

    if (isBlockingByThisUser){
      notFound()
    }

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
   
    const handleBlock = ()=>{
      startTransition(()=>{
          onBlock(userid)
          .then((data)=>toast.success(`you are blocked ${data.blocked.username}`))
          .catch((error)=>toast.error(`${error}`))
      })
    }

    const handleUnBlock = ()=>{
      startTransition(()=>{
        onUnBlock(userid)
        .then((data)=>toast.success(`you are unblock ${data.blocked.username}`))
        .catch((error)=>toast.error(`${error}`))
      })
    }
    
    const onClickBtn1 = ()=>{
  if (isFollowing) {
    handleUnfollow()
  }else{
    handleFollow()
  }
    }

    const onClickBtn2 = ()=>{
      if (isBlocking){
        handleUnBlock()
      }else{
        handleBlock()
      }
      // 
    
    
   

    }
  return (
    <>
     <Button 
    disabled = {isPending }
     variant={`${isFollowing ? 'destructive':'primary'}` }
     onClick={ onClickBtn1}>
    {
        isPending &&  <Loader2 className="mr-2  h-4 w-4 animate-spin" />
    }
   { isFollowing ? "Unfollow":"Follow"}
   </Button>
   <Button 
    disabled = {isPending }
    variant={`${isBlocking ? 'destructive':'primary'}` }
     onClick={ onClickBtn2}>
    {
        isPending &&  <Loader2 className="mr-2  h-4 w-4 animate-spin" />
    }
{
  isBlocking ? "Unblock" :"Block"
}
   
   </Button>
    </>

   
  )
}

export default Action