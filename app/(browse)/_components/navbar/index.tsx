import React from 'react'
import Logo from './Logo'
import Search from './Search'
import Actions from './Actions'


const Navbar = () => {
  return (
    <nav className='fixed top-0 justify-between px-2 lg:px-4 bg-[#252731] flex w-full items-center h-20 z-40  shadow-sm  '>
     <Logo/>
    
     <Search/>
     <Actions/>
   
    </nav>
   
  )
}

export default Navbar