'use client'

import React from 'react'
import {TbPlaylist} from 'react-icons/tb'
import {AiOutlinePlus} from 'react-icons/ai'

type Props = {}

const Library = (props: Props) => {

    const onCLick =  () => {

    }

  return (
    <div className='flex flex-col'>
        <div className='flex items-center justify-between px-5 py-4'>
            <div className='inline-flex items-center gap-x-2'>
              <TbPlaylist size={26} className='text-neutral-400'/>
              <p className='text-neutral-400 font-medium text-md'>Your library</p>
            </div>
            <AiOutlinePlus onClick={onCLick} size={20} className='text-neutral-400 cursor-pointer transition hover:text-white'/>
        </div>
        <div className='flex flex-col mt-4 px-3 gap-y-2'>
            list of songs
        </div>
    </div>
  )
}

export default Library