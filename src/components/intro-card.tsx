import React from 'react'
import { IoMdClose } from 'react-icons/io'

import { IStep } from '~/constant/types'
import DevelopmenStep from './development-step'

const IntroCard = ({ developmentSteps }: { developmentSteps: IStep[] }) => {
  return (
    <div className='w-full'>
      <div className='relative bg-introcard w-full h-36 bg-cover rounded-lg py-3 px-6 flex items-center'>
        <div className='w-1/3'>
          <p className='text-2xl font-semibold text-darkCyan'>
            Deep Learning Model <br /> development{' '}
            <span className='text-yellow-500 italic'>made easy</span>
          </p>
          <p className='text-[11px] text-gray-300 w-64 mt-1'>
            AutoDL makes it easy to create your <br /> bespoke deep learning model in just 4 steps.
          </p>
        </div>
        <div className='ml-16 flex w-2/3'>
          {developmentSteps &&
            developmentSteps.map((step) => (
              <DevelopmenStep
                key={step.idx}
                idx={step.idx}
                description={step.description}
                title={step.title}
              />
            ))}
        </div>
        <IoMdClose color='#9A9A9A' className='h-4 w-4 absolute right-3 top-3' />
      </div>
    </div>
  )
}

export default IntroCard
