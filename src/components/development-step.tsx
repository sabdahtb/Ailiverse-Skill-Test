import React from 'react'

import { IStep } from '~/constant/types'
import { HiPencil, HiOutlineTag } from 'react-icons/hi'
import { MdRefresh, MdLightbulbOutline } from 'react-icons/md'

const IconStep = ({ idx }: { idx: number }) => {
  switch (idx) {
    case 1:
      return <HiPencil color='orange' className='w-6 h-6 ml-6' />
    case 2:
      return <HiOutlineTag color='orange' className='w-6 h-6 ml-6' />
    case 3:
      return <MdLightbulbOutline color='orange' className='w-6 h-6 ml-6' />
    default:
      return <MdRefresh color='orange' className='w-6 h-6 ml-6' />
  }
}

const DevelopmenStep = ({ idx, title, description }: IStep) => {
  return (
    <div className=' mr-4'>
      <IconStep idx={idx} />
      <div className='bg-grenMSU20  h-4 w-32 rounded-md mt-2 flex'>
        <div className='w-4 h-4 rounded-full bg-darkCyan flex items-center justify-center'>
          <p className='text-gray-100 text-[11px] font-semibold'>{idx}</p>
        </div>
        <p className='text-yellow-500 text-[11px] font-semibold ml-2'>{title}</p>
      </div>
      <p className='text-gray-300 text-[10px] mt-2 ml-6'>{description}</p>
    </div>
  )
}

export default DevelopmenStep
