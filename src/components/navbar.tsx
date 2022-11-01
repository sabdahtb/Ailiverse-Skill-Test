import React, { useState } from 'react'
import { AiFillHome, AiFillBell, AiOutlineSearch } from 'react-icons/ai'

import AvatarIcon from './avatar-icon'
import { IprofileCard } from '~/constant/types'

type Itab = 'Projects' | 'Dashboard' | 'Domains'

const Navbar = ({ user }: { user: IprofileCard }) => {
  const [activeTabs, setactiveTabs] = useState<Itab>('Projects')

  const tabs: Itab[] = ['Projects', 'Dashboard', 'Domains']

  const changeTab = (tab: Itab) => {
    setactiveTabs(tab)
  }

  return (
    <div className='w-full bg-greenMSU px-6 flex justify-between'>
      <div className='flex h-full items-start'>
        <div className='flex py-2 items-center'>
          <AiFillHome className='h-6 w-6' color='white' />
          <div className='rounded-sm py-2 px-2 text-sm bg-grenMSU40 ml-4 flex items-center'>
            <AiOutlineSearch className='h-5 w-5' color='D3D3D3' />
            <input
              type='text'
              name='search'
              id='search'
              placeholder='Search'
              className='ml-2 border-none outline-none bg-transparent text-gray-200 placeholder:text-gray-300'
            />
          </div>
        </div>
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => changeTab(tab)}
            className='ml-6 pt-4 cursor-pointer'
            aria-hidden='true'
          >
            <p className='text-white mb-3 text-sm'>{tab}</p>
            {activeTabs === tab && <div className='rounded-md w-[90%] mx-[5%] h-1 bg-diamond' />}
          </div>
        ))}
      </div>
      <div className='flex py-3 items-center'>
        <AiFillBell className='h-5 w-5 mr-4' color='#D3D3D3' />
        <AvatarIcon name={user.fullName} />
      </div>
    </div>
  )
}

export default Navbar
