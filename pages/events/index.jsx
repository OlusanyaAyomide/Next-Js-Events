import React,{Fragment,useState} from 'react'
import {Header,EventList,EventSearch} from "../../components/events/exporter"
import { getAllEvents } from '../../assests/Dummydata'



export default function AllEvents() {
  const [filter,setfilter] = useState(false)
  const data = getAllEvents()
  const FilterToggle=()=>{setfilter((prev=>!prev))}
  return (
    <Fragment>
        <Header onClick = {FilterToggle}/>
        {filter && <EventSearch/>}
        <EventList data ={data}/>
    </Fragment>
  )
}
