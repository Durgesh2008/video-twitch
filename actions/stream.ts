"use server";

import { getself } from "@/lib/auth-service";
import { db } from "@/lib/db";
import { getStreamByUserID } from "@/lib/steram-service";
import { Stream } from "@prisma/client";
import { revalidatePath } from "next/cache";


export const updateStream = async(values:Partial<Stream>)=> {
try {
    const self = await getself()
    const selfStream = await getStreamByUserID(self.id)

    if(!selfStream){
        throw new Error("stream not found")
    }
    const validData = {
        name:values.name,
        isChatEnable:values.isChatEnable,
        isChatFollowersOnly:values.isChatFollowersOnly,
        isChatDelayed:values.isChatDelayed
    }

    const stream = await db.stream.update({
        where:{id:selfStream.id},
        data:{
            ...validData
        }
    })

    revalidatePath(`/u/${self.username}/chat`)
    revalidatePath(`/u/${self.username}`)
    revalidatePath(`/${self.username}`)

    return stream;
} catch (error) {
    throw new Error("Intrenal server error")
}
}