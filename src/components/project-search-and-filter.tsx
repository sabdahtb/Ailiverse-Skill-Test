import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoFolderOutline } from 'react-icons/io5'

import Button from './button'
import Dropdown from './dropdown'
import { IDropdownList } from '~/constant/types'

const ProjectSearchAndFilter = ({ dropdownLists }: { dropdownLists: IDropdownList[] }) => {
  return (
    <div className='mt-5 w-full relative pr-5'>
      <p className='flex gap-1 items-center text-sm'>
        <IoFolderOutline className='w-4 h-4' />
        Projects
      </p>
      <div className='flex gap-3 mt-3'>
        <div className='rounded-sm py-1 px-2 text-sm bg-grenMSU40 flex items-center border-[1px] border-gray-200 w-96'>
          <AiOutlineSearch className='h-5 w-5' color='D3D3D3' />
          <input
            type='text'
            name='search'
            id='search'
            placeholder='Project Name, Owner, AI Model'
            className='ml-2 border-none outline-none bg-transparent text-gray-500 w-full placeholder:text-gray-400'
          />
        </div>
        {dropdownLists &&
          dropdownLists.map((dropdown) => (
            <Dropdown
              key={dropdown.name}
              name={dropdown.name}
              placeholder={dropdown.placeholder}
              lists={dropdown.lists}
            />
          ))}
        <Button
          text='Create New'
          type='primary'
          onClick={() => {
            return
          }}
        />
      </div>
    </div>
  )
}

export default ProjectSearchAndFilter
