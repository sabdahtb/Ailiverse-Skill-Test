import React from 'react'

import { randomUser, recentProjects } from '~/constant/data'
import { AllMembers, ProfileCard, RecentProjects, ToggleBox } from '~/components'

const SideBar = () => {
  return (
    <div className='relative h-full'>
      {/* Profile Card Session */}
      <ProfileCard fullName={'Burhan UI Tayyab'} proMember={true} totalProject={25} />
      {/* Recent Project Session */}
      <div className='pt-3 w-full'>
        <p className='text-sm'>Recent Projects</p>
        <RecentProjects recentProjects={recentProjects} />
        <div className='bg-gray-300 h-[1px] w-full mt-6' />
      </div>
      {/* All Member Session */}
      <div className='pt-3 w-80'>
        <p className='text-sm'>All Members</p>
        <AllMembers randomUser={randomUser} />
      </div>
      {/* Checkbox in bottom */}
      <div className='absolute bottom-0 left-0'>
        <ToggleBox />
      </div>
    </div>
  )
}

export default SideBar
