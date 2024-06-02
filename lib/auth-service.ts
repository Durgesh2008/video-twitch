import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export const getself = async()=>{
    const self = await currentUser()

    if (!self || !self.username){
        throw new Error("unauthrized")
    }

    const user = await db.user.findUnique({
        where:{externalUserId:self.id}
    })

    if(!user){
        throw new Error("Not found")
    }

    return user;
}

export const getselfByUsername = async(username:string)=>{
    const self = await currentUser()

    if (!self || !self.username){
        throw new Error("unauthrized")
    }
    const user = await db.user.findUnique({
        where:{username}
    })
    if(!user){
        throw new Error("Not found")
    }
    if(self.username !== user.username){
        throw new Error("unauthrized")
    }
    return user;
}