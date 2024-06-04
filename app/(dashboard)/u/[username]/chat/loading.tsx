import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'
import { ToggleCardSkeleton } from './_component/ToggleCard'

const ChatLoading = () => {
  return (
    <div
    className='space-y-4 p-6'
    >
    <Skeleton className='h-10 w-[200px]'/>
    <div className='space-y-4'>
    <ToggleCardSkeleton/>
    <ToggleCardSkeleton/>
    <ToggleCardSkeleton/>
    </div>
    </div>
  )
}

export default ChatLoading