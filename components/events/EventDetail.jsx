import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay,faMap } from "@fortawesome/free-solid-svg-icons"

export default function EventDetail({image,description,date,address}) {
    const formatedlocation = address.replace(","," ")
    const HumanReadableDate = new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric',
      })
  return (
    <div className="relative ">
        <div className='absolute -top-10'>
            <div className='w-11/12 md:w-8/12 mx-auto lg:6/12 bg-[#020e0a] rounded-md flex flex-col py-4 md:p-0 md:flex-row'>
                <div className='5/12 mx-auto py-2'>
                    <div className='h-[200px] w-[200px] rounded-full overflow-hidden bg-white border-white border-[3px]'>
                        <img className='h-[200px] w-full object-cover' src={image} alt="" />
                    </div>
                </div>
                <div className='md:w-7/12 pl-2'>
                    <div className='flex items-center h-full'>
                        <div className='block md:block'>
                            <div className='w-6/12'>
                                <span className="block text-[#03be9f] py-1"><FontAwesomeIcon icon={faCalendarDay}/></span>
                                <h1 className='text-[#c4e7e1] font-semibold'>{HumanReadableDate}</h1>
                            </div>
                            <div className='w-6/12'>
                            <span className="block text-[#03be9f] py-1"><FontAwesomeIcon icon={faMap}/></span>
                              <h1 className='text-[#c4e7e1] font-semibold pb-2' >{formatedlocation}</h1>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
            <div className='py-4 px-2'>
                <h1 className='font-semibold px-2 md:px-12 text-center'>{description}</h1>
            </div>
        </div>
      
    </div>
  )
}
