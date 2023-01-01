import React,{useRef} from 'react'
import {useRouter} from "next/router"

export default function EventSearch() {
  const [yearRef,MonthRef] = [useRef(),useRef()]
  const {push} = useRouter()
    function HandleSubmit(){
      push(`/events/${yearRef.current.value}/${MonthRef.current.value}`)
    }
  return (
    <div className='bg-white md:bg-transparent mx-auto md:mt-4 p-4 pt-1 md:p-0'>
        <div className='flex justify-center flex-col md:flex-row '>
            <form className='md:pr-1 flex  py-2 md:py-0'>
            <label htmlFor="year" className='label'>Year</label>
            <select id ="year" className='select' ref={yearRef}>
              <option value={"2021"}>2021</option>
              <option value ={"2022"}>2022</option>
            </select>
            </form>
            <form className='md:pl-1 flex py-2 md:py-0 '>
            <label htmlFor="months" className='label'>Months</label>
            <select id="months" className='select' ref={MonthRef}>
                <option value ={"1"}>January</option>
                <option value ={"2"}>February</option>
                <option value ={"3"}>March</option>
                <option value ={"4"}>April</option>
                <option value ={"5"}>May</option>
                <option value ={"6"}>June</option>
                <option value ={"7"}>July</option>
                <option value ={"8"}>August</option>
                <option value ={"9"}>September</option>
                <option value ={"10"}>October</option>
                <option value ={"11"}>November</option>
                <option value ={"12"}>December</option>
            </select>
            </form>
            <button onClick={HandleSubmit} className="label w-full md:w-24 md:ml-2 mt-1 md:mt-0 rounded-sm bg-[#03be9f] text-white">Search</button>
        </div>
    </div>
  )
}
