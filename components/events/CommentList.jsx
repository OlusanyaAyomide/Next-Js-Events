import React from 'react'

export default function CommentList({comment}) {
    const AllComment = comment.map((item,key)=>{
        return(
            <div key={key} className="py-2 border-b border-gray-500">
                <h1 className='font-semibold italic'>{item.text}</h1>
                <h1 className='text-[14px] text-right italic'>{item.name}</h1>
            </div>
        )
    })
  return (
    <div className='my-2 mywidth pl-2 pr-4'>
        {AllComment}
    </div>
  )
}
