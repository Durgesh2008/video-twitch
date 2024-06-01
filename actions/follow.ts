"use server"
import { revalidatePath } from 'next/cache';
import { followUser, unFollowingUser } from './../lib/follow-service';

export const onFollow = async(id:string)=>{
    try {
       const followedUser = await followUser(id)
       revalidatePath("/")
       if(followedUser){
        revalidatePath(`${followedUser.following.username}`)
       }
       return followedUser;
    } catch (error) {
        throw new Error("Internal sever error")
    }
}

export const onUnFollow = async (id:string)=>{
    try {
        const unFollowedUser = await unFollowingUser(id)
        revalidatePath("/")
        if(unFollowedUser){
            revalidatePath(`${unFollowedUser.following.username}`)
        }
        return unFollowedUser
    } catch (error) {
        throw new Error("Internal sever error")
    }
}