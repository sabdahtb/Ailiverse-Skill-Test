import React from 'react'

import { IntroCard, Projects, ProjectSearchAndFilter, RecentActivity } from '~/components'
import { developMentSteps, dropdownLists, allProjects, recentActivities } from '~/constant/data'

const Content = () => {
  return (
    <div className='w-full'>
      {/* intro card session */}
      <IntroCard developmentSteps={developMentSteps} />
      <div className='w-full flex mt-5 gap-5'>
        <div className='w-3/4'>
          {/* filtering and search bar projects */}
          <ProjectSearchAndFilter dropdownLists={dropdownLists} />
          {/* mapping projects list */}
          <div className='mt-5'>
            {allProjects &&
              allProjects.map((project, index) => <Projects key={index} project={project} />)}
          </div>
        </div>
        {/* recent activity session */}
        <div className='w-1/4'>
          <p className='text-sm mb-5'>Recent Activity</p>
          {recentActivities &&
            recentActivities.map((activities, index) => (
              <RecentActivity key={index} activities={activities} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Content
