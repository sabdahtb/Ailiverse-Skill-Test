import React from 'react'
import { IRecentActivity } from '~/constant/types'

const RecentActivity = ({ activities }: { activities: IRecentActivity }) => {
  return (
    <div className='border-l-2 border-darkCyan pl-3 relative pt-1 h-14'>
      <p className='text-xs text-morningGray absolute top-[-4px]'>{activities.updateAt}</p>
      <p className='mt-5 text-sm'>{activities.description}</p>
      <div className='h-2 w-2 rounded-full bg-darkCyan absolute top-0 left-[-6px]' />
    </div>
  )
}

export default RecentActivity
