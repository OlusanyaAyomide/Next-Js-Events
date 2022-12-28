import React,{Fragment} from 'react'
import {EventList,Header} from "../../components/events/exporter"
import { getFilteredEvents } from '../../assests/Dummydata'
import {useRouter} from "next/router"

export default function FilteredEvents() {
  const {query} = useRouter()
  if (query.slug){
    const [year,month] = query.slug
    const events = getFilteredEvents({year:year,month:month})
    console.log(events)
    return (
      <Fragment>
         <Header/>
         <EventList data = {events}/>
      </Fragment>
    )
  }
  else{
    return(
      <div>
        Loading....
      </div>
    )
  }


}
