import { db } from "./db"

export const getUserByUsername = async (username:string)=>{
    try {
        if(!username){
            throw new Error("username is requried")
        }

        const user = await db.user.findUnique({
            where:{username}
        })

        if(!user){
            throw new Error("user not found")
        }
        return user
    } catch (error) {
        return null
    }

}