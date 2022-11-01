import React from 'react'

import { getInitials } from '~/utils'

const AvatarIcon = ({ name }: { name: string }) => {
  const initialname = getInitials(name)
  return (
    <div className='rounded-full w-7 h-7 bg-blue-600 text-xs flex justify-center items-center text-white border-[1px]'>
      {initialname}
    </div>
  )
}

export default AvatarIcon
