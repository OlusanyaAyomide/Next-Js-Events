import React,{Fragment,useState} from 'react'
import {Header,EventList,EventSearch,Signup} from "../../components/events/exporter"
import { getAllEvents } from '../../assests/Dummydata'
import MetaHead from '../../components/events/MetaHead'



export default function AllEvents({product}) {
  const [filter,setfilter] = useState(false)
  const data = getAllEvents(product)
  const FilterToggle=()=>{setfilter((prev=>!prev))}
  return (
    <Fragment>
        <MetaHead title = "All Events" description={"Find a lot of great Events that allows yo to evolve"}/>
        <Header onClick = {FilterToggle}/>
        <Signup/>
        {filter && <EventSearch/>}
        <EventList data ={data}/>
    </Fragment>
  )
}

export async function getServerSideProps(){
   async function fetchData(){
    const res = await fetch("http://127.0.0.1:8000/event")
    const data = await res.json()
    return data
  }
  try{
    const Data = await fetchData()
      return({
        props:{
          product:Data
        }
      })  
  }
  catch{
    return {notFound:true}
  }
 
}
