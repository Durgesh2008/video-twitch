
import { getself } from "./auth-service"
import { db } from "./db"

export const getFolloweredUsers = async ()=>{
    try {
        const self = await getself()
        const followedUsers = await db.follow.findMany({
            where:{
                followerId:self.id,
                following:{
                    blocking:{
                        none:{
                            blockedId:self.id
                        }
                    }
                }
            },
            include:{
                following:true
            }
        })

        return followedUsers
    } catch (error) {
        return []
    }
}

export const isFollowingUser = async(id:string)=>{

    try {
        const self = await getself()

        const otherUser = await db.user.findUnique({
            where:{id}
        })

        if(!otherUser){
            throw new Error("User not found")
        }

        if(id === self.id){
            return true
        }
        const existingFollow = await db.follow.findFirst({
            where:{
                followerId:self.id,
                followingId:id
            }
        })

        return !!existingFollow
    } catch (error) {
        return false
    }
}

export const followUser = async(id:string)=>{
   const self = await getself()
   const otherUser = await db.user.findUnique({
    where:{id}
   })
   if(!otherUser){
    throw new Error("user not found")
   }
   if(otherUser.id == self.id){
    throw new Error("cannot follow yourself")
   }
   const existingFollow = await db.follow.findFirst({
    where:{
        followerId:self.id,
        followingId:id
    }
})
if(existingFollow){
    throw new Error("already following")
}
const follow = await db.follow.create({
    data:{
        followerId:self.id,
        followingId:otherUser.id
    },
    include:{
        following:true,
        follower:true
    }
})
return follow
}


export const unFollowingUser = async (id:string)=>{
    const self = await getself()

    const otherUser = await db.user.findUnique({
        where:{id}
    })

    if(!otherUser){
        throw new Error("User not found")
    }
    if(otherUser.id === self.id){
        throw new Error("can't unfollow yourself")
    }

    const existingFollow = await db.follow.findFirst({
        where:{
            followerId:self.id,
            followingId:otherUser.id
        }
    })
    if(!existingFollow){
        throw new Error("Not following")
    }
    const follow = await db.follow.delete({
        where:{
            id:existingFollow.id
        },
        include:{
            following:true
        }
    })
    return follow
}