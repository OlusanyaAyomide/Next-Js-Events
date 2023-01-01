import React from 'react'

export default function Signup() {
  return (
    <div className='w-full mx-auto px-4 py-2 md:p-0 md:w-8/12 lg:w-6/12'>
        <div>
            <h1 className='text-[20px] font-semibold mb-2 text-center'>Sign Up to stay updated</h1>
            <form className='flex'>
                <input type="email" className = "form-input block w-8/12 text-[18px]" />
                <button className='bg-[#03be9f] w-4/12 py-2 text-white block text-[18px]'>Register</button>
            </form>
        </div>
    </div>
  )
}
