import { outfitFont } from '@/app/font'
import { getself } from '@/lib/auth-service'
import { getStreamByUserID } from '@/lib/steram-service'
import React from 'react'
import ToggleCard from './_component/ToggleCard'

const ChatPage = async() => {

    const self = await getself()
    const stream = await getStreamByUserID(self.id)
    console.log(stream)
    if(!stream){
        throw new Error("stream not found")
    }
    return (
        <div className='p-6'>
          <div className=" mb-4">
            <h1 className={`text-2xl font-bold ${outfitFont.className}`} >Chat Setting</h1>
          </div>
          <div className='space-y-4'>
        <ToggleCard
        field = "isChatEnable"
        label = "Enable Chat"
        value = {stream.isChatEnable}
        />
          <ToggleCard
        field = "isChatDelayed"
        label = "Delay Chat"
        value = {stream.isChatDelayed}
        />
          <ToggleCard
        field = "isChatFollowersOnly"
        label = "Must be follwing to chat"
        value = {stream.isChatFollowersOnly}
        />
          </div>
            </div>
    )
}

export default ChatPage