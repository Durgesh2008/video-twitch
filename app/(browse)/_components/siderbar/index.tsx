import React from 'react'
import Wrapper from '@/app/(browse)/_components/siderbar/Wrapper'
import Toggle from '@/app/(browse)/_components/siderbar/Toggle'
import Recommened from '@/app/(browse)/_components/siderbar/Recommened'
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

export default SideBar