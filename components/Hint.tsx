
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { authorFont } from '@/app/font';


interface HintProps {
    label:string;
    children:React.ReactNode;
    aschild?:boolean;
    side?:'top'|'bottom' | 'left' | 'right';
    align?:'start'|'center'| 'end'

}

const Hint = ({label,children,aschild,side,align}:HintProps) => {
  return (
    <TooltipProvider >
<Tooltip delayDuration={300} >
  <TooltipTrigger asChild={aschild} >
    {children}
  </TooltipTrigger>
  <TooltipContent align={align} side={side} className={`text-black bg-white rounded-[8px] shadow-sm`}>
    <p className={`${authorFont.className} font-semibold`}>
    {label}
    </p>
   
  </TooltipContent>
</Tooltip>
    </TooltipProvider>
  )
}

export default Hint