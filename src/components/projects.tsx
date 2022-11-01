import React from 'react'
import { FiTarget } from 'react-icons/fi'
import { AiOutlineStar } from 'react-icons/ai'
import { IoPersonOutline } from 'react-icons/io5'
import { MdLightbulbOutline } from 'react-icons/md'
import { HiOutlineHashtag, HiOutlinePhotograph } from 'react-icons/hi'

import { IProjects } from '~/constant/types'
import AvatarIcon from './avatar-icon'

const Projects = ({ project }: { project: IProjects }) => {
  return (
    <div className='w-[95%] border-[1px] border-gray-200 p-4 flex justify-between'>
      <div>
        <div className='flex items-center'>
          <p className='text-md'>{project.title}</p>
          {project.type.map((type, index) => (
            <div key={index} className='bg-diamond40 px-2 py-[1px] rounded-lg ml-2'>
              <p className='text-darkCyan text-xs font-semibold'>{type}</p>
            </div>
          ))}
        </div>
        <p className='text-morningGray text-xs'>{project.description}</p>
        <div className='flex mt-5'>
          {project.isImageProject ? (
            <p className='text-darkCyan text-xs font-semibold flex items-center gap-2'>
              <HiOutlinePhotograph color='#0F9488' className='h-4 w-4' />
              images
            </p>
          ) : (
            <p className='text-darkCyan text-xs font-semibold flex items-center gap-2'>
              <HiOutlineHashtag color='#0F9488' className='h-4 w-4' />
              numerical
            </p>
          )}
          <p className='flex items-center ml-4 text-morningGray'>
            <AiOutlineStar color='#8D999A' className='h-4 w-4 mr-1' /> {project.star}
          </p>
          <p className='flex items-center ml-4 text-morningGray'>
            <FiTarget color='#8D999A' className='h-4 w-4 mr-1' /> {project.percentage} %
          </p>
          <p className='flex items-center ml-4 text-morningGray'>
            <MdLightbulbOutline color='#8D999A' className='h-4 w-4 mr-1' /> {project.train}
          </p>
          <p className='flex items-center ml-4 text-morningGray'>
            <IoPersonOutline color='#8D999A' className='h-4 w-4 mr-1' /> {project.participant}
          </p>
        </div>
      </div>
      <div className='flex flex-col items-end justify-between'>
        <AvatarIcon name={project.user} />
        {project.isDraft && <p className='text-morningGray italic text-xs'>draft</p>}
        <p className='text-sm text-gray-600'>Updated {project.updatedAt}</p>
      </div>
    </div>
  )
}

export default Projects
