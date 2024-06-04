import { db } from "./db"

export const getStreamByUserID = async(userId:string)=>{

    if(!userId){
        throw new Error("user id is required")
    }

    const stream = await db.stream.findUnique({
        where:{userId}
    })

    return stream
}