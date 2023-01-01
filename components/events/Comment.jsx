import React,{useRef} from 'react'

export default function Comment({onClick,showComment,onSubmit}) {
    const [emailRef,nameref,commentref] = [useRef(),useRef(),useRef()]
    const handleSubmit=(event)=>{
        event.preventDefault()
        onSubmit(emailRef.current.value,nameref.current.value,commentref.current.value) }

  return (
    <div className='mywidth mt-[520px] mb-6 md:mt-[290px] pl-2 pr-4'>
        <button className="w-fit p-2 font-semibold mx-auto text-white rounded-md block my-6 border border-[#03be9f]" onClick={onClick}>{showComment?"Hide Comments":"Show Comments"}</button>
        {showComment && <form className='p-2 rounded-lg pb-6 bg-[#03be9f]'>
            <div className='flex'>
                <div className='w-6/12 pr-2'>
                    <label htmlFor="email" className='min-label'>Your email</label>
                    <input id="email" type ="email" className='min-input' ref={emailRef}></input>
                </div>
                <div className="w-6/12 pl-2">
                    <label htmlFor="name" className='min-label'>Your name</label>
                    <input id="email" type ="text" className='min-input' ref={nameref}></input>
                </div>
            </div>
            <div className='mt-3'>
                <label htmlFor="comment" className='my-1 text-[#c4f8ef]'>Your comment </label>
                <textarea id="comment" className='h-[70px] px-1 py-2 w-full text-gray-700 block outline-[#04f893] bg-[#c4f8ef]' ref={commentref}></textarea>
            </div>
            <button  className='w-fit px-2 py-1 font-semibold mx-auto bg-white rounded-md block mt-8 border text-[#03be9f]' onClick={handleSubmit}>Submit</button>
        </form>}
    </div>
  )
}
