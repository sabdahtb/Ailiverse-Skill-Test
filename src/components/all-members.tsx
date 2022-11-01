import React from 'react'

import { getInitials } from '~/utils'
import { IRandomUser } from '~/constant/types'

const AllMembers = ({ randomUser }: { randomUser: IRandomUser[] }) => {
  return (
    <div className='grid grid-cols-7 mt-3 pr-10 gap-1'>
      {(() => {
        const memberAvatar = []
        for (let i = 0; i < 28; i++) {
          memberAvatar.push(
            <div
              key={i}
              className={`rounded-full w-7 h-7 ${
                i > 6 ? 'bg-gray-300' : randomUser[i].background
              } ${
                i == 27 ? 'text-gray-500' : 'text-white'
              } text-xs flex justify-center items-center border-[1px]`}
            >
              {i < 7 ? getInitials(randomUser[i].name) : i == 27 ? '+72' : ''}
            </div>,
          )
        }
        return memberAvatar
      })()}
    </div>
  )
}

export default AllMembers
