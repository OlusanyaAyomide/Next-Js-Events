import React,{useContext} from 'react'
import Link from "next/link"
import NumberContext from '../context/test-context'

export default function Number() {
    const Numberctx = useContext(NumberContext)
  return (
    <div>
        <div className='w-6/12 mx-auto font-bold text-center text-2xl'>{Numberctx.value}</div>
        <div className='w-6/12 mx-auto text-bold flex justify-around'>
            <button className='border p-2 bg-gray-500 text-bold' onClick={Numberctx.AddNumber}>Add</button>
            <button className='border p-2 bg-gray-500 text-bold' onClick={Numberctx.subtractNumber}>Subtract</button>
        </div>
        <Link href="/">To First Page</Link>
    </div>

  )
}
