import React,{Fragment} from 'react'
import {Header,Hero,EventDetail} from "../../components/events/exporter"
import { useRouter } from 'next/router'
import { getEventById } from '../../assests/Dummydata'

export default function Detail() {
  const {query} = useRouter()
  const event = getEventById(query.eventid)
  if (event){
    const{description,location,date,image} = event
    return (
      <Fragment>
        <Header/>
        <Hero title={event.title} />
        <EventDetail description={description} address ={location} date={date} image ={image}/>
      </Fragment>
    )
  }
  else{
    return(
      <h1 className='text-2xl text-white font-semibold'>Loading</h1>
    )
  }


}

