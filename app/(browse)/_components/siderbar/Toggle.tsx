"use client";
import { satoshiFont } from '@/app/font';
import Hint from '@/components/Hint';
import { Button } from '@/components/ui/button';
import { useSidebar } from '@/store/use-sidbar';
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react';
import React from 'react'

const Toggle = () => {

    const {collapsed,onExapnd,onCollapsed} = useSidebar((state)=>state)

    const label = collapsed? "Expand" :"Collapse"
  return (
    <>
    {
        collapsed?
        <div className='hidden  p-3 pl-3 mb-2 lg:flex items-center w-full'>
            <Hint label={label} side='right' aschild>
            <Button
            onClick={onExapnd}
            variant="ghost"
            className='h-auto p-2 ml-auto'
            >
                <ArrowRightFromLine className='h-4 w-4'/>
            </Button>
            </Hint>
    
        </div>:
        <div className={`p-3 pl-3 mb-2 flex items-center w-full ${satoshiFont.className}`}>
            <p className='font-semibold text-primary '>
                For you
            </p>
            <Hint label={label} side='right' aschild>
            <Button
            onClick={onCollapsed}
            variant="ghost"
            className='h-auto p-2 ml-auto'
            >
                <ArrowLeftFromLine className='h-4 w-4'/>
            </Button>
            </Hint>
           
        </div>
    }
    </>
  )
}

export default Toggle