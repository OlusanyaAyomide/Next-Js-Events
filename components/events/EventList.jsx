import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar,faLocation} from "@fortawesome/free-solid-svg-icons"
import Button from './Button'


export default function EventList(prop) {
  const props = prop.data
  const AllEventList = props.map((item,key)=>{
    const HumanReadableDate = new Date(item.date).toLocaleDateString('en-US',{
      day:'numeric',
      month:'long',
      year:'numeric',
    })
    const formatedlocation = item.location.replace(","," ")
    return(
      <div key={key} className="bg-white shadow-md shadow-black/70 my-2 rounded-md flex flex-col md:flex-row">
        <div className='md:w-4/12 h-[170px]'>
          <img className='h-full w-full md:object-contain object-cover' src={item.image} alt="not found" />
        </div>
        <div className='md:w-8/12 flex items-center px-4'>
          <div className='w-full'>
            <h1 className='font-semibold text-[20px] py-1'>{item.title}</h1>
            <span className='font-[500] block'><span className='mr-2'><FontAwesomeIcon icon ={faCalendar}></FontAwesomeIcon></span>{HumanReadableDate}</span>
            <span><span className='mr-2'><FontAwesomeIcon icon ={faLocation}></FontAwesomeIcon></span>{formatedlocation}</span>
            <div className='md:flex justify-end my-2'><Button id = {item.id}/></div>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div className='p-2'>
        <div className='mywidth'>
          {AllEventList}
        </div>
    </div>
  )
}
