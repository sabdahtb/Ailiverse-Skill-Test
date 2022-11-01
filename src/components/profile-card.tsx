import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

import { IprofileCard } from '~/constant/types'

const ProfileCard = ({ fullName, proMember, totalProject }: IprofileCard) => {
  return (
    <div className='w-full'>
      <div className='flex gap-4'>
        <div className='rounded-full w-7 h-7 bg-blue-600 text-xs flex justify-center items-center text-white border-[1px]'>
          BU
        </div>
        <div>
          <p className='text-sm'>{fullName}</p>
          {proMember ? (
            <p className='flex items-center gap-1 text-gray-500 text-xs'>
              <AiFillCheckCircle className='h-3    w-3' color='#D1D1D1' />
              Pro Member
            </p>
          ) : (
            <p className='flex items-center gap-1 text-gray-500 text-xs'>Basic Member</p>
          )}
          <p className='text-gray-500 text-xs mt-3'>{`Created ${totalProject} Projects`}</p>
        </div>
      </div>
      <div className='bg-gray-300 h-[1px] w-full mt-6' />
    </div>
  )
}

export default ProfileCard
