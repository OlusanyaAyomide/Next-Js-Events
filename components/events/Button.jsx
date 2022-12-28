import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"

export default function Button(prop) {
  return (
    <Link href={`/events/${prop.id}`}><button className='bg-[#03be9f] font-[500] py-2 px-6 rounded-md shadow-sm shadow-[#00000033] border-[#03be9f] text-white'>Explore <span className='ml-2'><FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon></span>
    </button></Link>
  )
}
