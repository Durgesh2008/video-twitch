"use client"
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import CopyButton from './CopyButton'
import { Button } from '@/components/ui/button'
interface KeyCardProps{
    value:string | null
}
const KeyCard = ({value}:KeyCardProps) => {
    const [ishidden,setIsHidden] = useState(true)
  return (
    <div className='rounded-xl bg-gray-900 p-6'>
       <div className="flex items-start gap-x-10">
        <p className='font-semibold shrink-0 '>
            Stream Key
        </p>
        <div className="space-y-2 w-full">
            <div className="w-full flex items-center gap-x-2">
                <Input
                value={value || ""}
                type= {!ishidden ? "text":"password"}
                disabled
                placeholder='Stream key'
                />
                <CopyButton value={value || ""}/>
            </div>
            <Button
            onClick={()=>setIsHidden(!ishidden)}
            size="sm"
            variant="link"
            >
               {
                ishidden ? "Show":"Hide"
               }
            </Button>
        </div>
       </div>
        </div>
  )
}

export default KeyCard