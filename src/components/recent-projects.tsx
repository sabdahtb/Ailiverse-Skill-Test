import React from 'react'
import { HiOutlinePhotograph, HiOutlineHashtag } from 'react-icons/hi'

import { IRecentProjects } from '~/constant/types'

const RecentProjects = ({ recentProjects }: { recentProjects: IRecentProjects[] }) => {
  return (
    <>
      {recentProjects &&
        recentProjects.map((recentProject, index) => (
          <div key={index} className='mt-2'>
            <p className='text-darkCyan text-sm flex items-center gap-2'>
              {recentProject.isImageProject ? (
                <HiOutlinePhotograph color='#0F9488' className='h-4 w-4' />
              ) : (
                <HiOutlineHashtag color='#0F9488' className='h-4 w-4' />
              )}
              {recentProject.title}
            </p>
            <p className='text-xs text-gray-700 ml-6 w-60 font-thin'>{recentProject.description}</p>
          </div>
        ))}
    </>
  )
}

export default RecentProjects
