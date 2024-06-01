import React from 'react'
import Wrapper from '@/app/(browse)/_components/siderbar/Wrapper'
import Toggle from '@/app/(browse)/_components/siderbar/Toggle'
import Recommened, { RecommendedSkeleton } from '@/app/(browse)/_components/siderbar/Recommened'
import { getRecommended } from '@/lib/recommended-service'

const SideBar = async() => {
  const recommeded = await getRecommended()
  return (
    <>
    <Wrapper>
        <Toggle/>
        <div className='space-y-4 pt-4 lg:pt-0'>
          <Recommened data={recommeded}/>
        </div>
    </Wrapper>
    </>
  )
}


export const SideBarSkeleton = ()=>{
  return(
    <aside className='fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50'>
      <RecommendedSkeleton/>
    </aside>
  )
}
export default SideBar