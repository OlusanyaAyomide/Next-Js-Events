import React from 'react'
import { useRouter } from 'next/router'

export default function All() {
    const {query} = useRouter()
    console.log(query)
  return (
    <div className='text-blue-300 text-3xl'>Error 404,Page Not Found</div>
  )
}
