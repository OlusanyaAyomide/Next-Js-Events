import React from 'react'

export default function Header(prop) {
  return (
    <div className='flex justify-between items-center px-2 md:px-12 py-4 bg-[#0b3628]'>
        <span className='text-3xl md:text-2xl gradient-text-01 '>NextEvents</span>
        <button className='md:text-md text-xl gradient-text-01 pt-2 md:pt-0' onClick={prop.onClick}>Browse All Events</button>
    </div>
  )
}
 