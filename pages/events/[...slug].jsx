import React,{Fragment} from 'react'
import {EventList,Header} from "../../components/events/exporter"
import MetaHead from '../../components/events/MetaHead'

export default function FilteredEvents({products}) {
    return (
      <Fragment>
        <MetaHead title ={"Filtered Events"} description={`Events for Filtered Time Range`}/>
         <Header/>
         <EventList data = {products}/>
      </Fragment>
    )
  }

export async function getServerSideProps(context){
  const {params} = context
  const [year,month] = params.slug
  console.log(year,month)
  async function FetchApi(){
    const res = await fetch(`http://127.0.0.1:8000/event?year=${year}&month=${month}`)
    const data = await res.json()
    return data
  }
  try{
    const Data = await FetchApi()
    return ({
      props:{ products: Data}
    })
  }
  catch(err){return{notFound:true}}
}
