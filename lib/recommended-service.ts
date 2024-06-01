import { db } from "@/lib/db";
import { getself } from "@/lib/auth-service";

export const getRecommended = async ()=>{
let userId 
try {
    const self = await getself()
    userId = self.id
} catch (error) {
    userId = null
}

let users = []
if (userId){
    users = await db.user.findMany({
        where:{
  
            NOT:{
                id:userId
            }
        },
        orderBy:{
            createdAt:"desc"
        }
    })
}else{
    users = await db.user.findMany({
        orderBy:{
            createdAt:"desc"
        }
    })
}
     

    return users;
}