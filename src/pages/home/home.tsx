import React from 'react'

import { Navbar } from '~/components'
import { SideBar, Content } from './components'
import { profileUserCard } from '~/constant/data'

const Home = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar user={profileUserCard} />
      <div className='w-full flex justify-between gap-6 px-5 pt-5'>
        <div className='w-72'>
          <SideBar />
        </div>
        <div className='w-5/6'>
          <Content />
        </div>
      </div>
    </div>
  )
}

export default Home
