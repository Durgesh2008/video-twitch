import React from 'react'
import Wrapper from '@/app/(browse)/_components/siderbar/Wrapper'
import Toggle, { ToggleSkeloton } from '@/app/(browse)/_components/siderbar/Toggle'
import Recommened, { RecommendedSkeleton } from '@/app/(browse)/_components/siderbar/Recommened'
import { getRecommended } from '@/lib/recommended-service'
import { getFolloweredUsers } from '@/lib/follow-service'
import Following, { FollowingSkeleton } from './Following'

const SideBar = async() => {
  const recommeded = await getRecommended()
  const following = await getFolloweredUsers()
  return (
    <>
    <Wrapper>
        <Toggle/>
        <div className='space-y-4 pt-4 lg:pt-0'>
        <Following data={following}/>
         <Recommened data={recommeded}/>
        
        </div>
    </Wrapper>
    </>
  )
}


export const SideBarSkeleton = ()=>{
  return(
    <aside className="fixed left-0  flex flex-col h-full bg-[#252731] border-r border-[#2d2e35] z-50 top-20  transition-all delay-150 duration-300 ">
     <ToggleSkeloton/>
     <FollowingSkeleton/>
      <RecommendedSkeleton/>
     
    
    </aside>
  )
}
export default SideBar