import { isFollowingUser } from '@/lib/follow-service'
import { getUserByUsername } from '@/lib/user-service'
import { notFound } from 'next/navigation'
import React from 'react'
import Action from './_components/action'
import { isBlockedByUser, isBlocking } from '@/lib/block-service'
interface UserProps{
    params:{
        username:string
    }
}
const UserPage = async({params}:UserProps) => {
    const user = await getUserByUsername(params.username)

    if(!user){
  notFound()
    }
    const isfollowing = await isFollowingUser(user.id);
    const isBlockingByThisUser = await  isBlockedByUser(user.id)
    const isBlockingbyYou = await isBlocking(user.id)
  return (
    <div className='text-white relative top-20 flex flex-col gap-y-4 ml-3'>
    <p>
       username:{user.username}
     
    </p>
    <p>
    id:{user.id}
    </p>
    <p>{`${isfollowing}`}</p>
    <p>
      isBlocking--{`${isBlockingbyYou}`}
    </p>
    <Action isFollowing = {isfollowing} isBlockingByThisUser={isBlockingByThisUser} isBlocking={isBlockingbyYou} userid={user.id}/>
        </div>
  )
}

export default UserPage