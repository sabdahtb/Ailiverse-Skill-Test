import React, { useState } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'

const ToggleBox = () => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <div className='flex gap-3'>
      <div
        className='h-4 w-12 relative bg-gray-300 cursor-pointer rounded-xl flex items-center'
        onClick={() => setIsChecked(!isChecked)}
        aria-hidden='true'
      >
        <div
          className={`h-6 w-6 rounded-full duration-300 ease-in bg-white shadow-sm shadow-black ${
            isChecked ? 'ml-6' : 'ml-0'
          }`}
        />
      </div>
      {isChecked ? <BiSun className='h4 w-4' color='orange' /> : <BiMoon className='h-4 w-4' />}
    </div>
  )
}

export default ToggleBox
