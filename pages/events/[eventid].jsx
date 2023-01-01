import { text } from '@fortawesome/fontawesome-svg-core'
import React,{Fragment,useEffect,useState} from 'react'
import {Header,Hero,EventDetail,Comment,CommentList} from "../components/events/exporter"
import MetaHead from '../components/events/MetaHead'
import handler from './api/posthandler'

export default function Detail({event}) {
  const [comment,setcomment] = useState(false)
  const [eventDetail,seteventDetail] = useState(event)
  const handleComment=()=>{setcomment(prev=>!prev)}
  const [formInput,setFormInput] = useState({email:"",text:"",name:""})

  const handleFormChange=(email,name,text)=>{
    console.log(email,name,comment)
    setFormInput({email:email,text:text,name:name})
  }

  if (event){
    const{description,location,date,image,comments} = eventDetail
    useEffect(()=>{
      if (formInput.email === ""){return}
      console.log("fetching.....")
        async function FetchApi(){
          const res = await fetch(`http://127.0.0.1:8000/create-comment/${eventDetail.id}`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(formInput)
          })
          const data = await res.json()
          seteventDetail(data)
        }  
        try{FetchApi()}
        catch(err){console.log(err)}
    },[formInput])
    return (
      <Fragment>
        <MetaHead title ={event.title} description ={description}/>
        <Header/>
        <Hero title={event.title} />
        <EventDetail description={description} address ={location} date={date} image ={image}/>
        <Comment onClick = {handleComment} showComment={comment} onSubmit={handleFormChange}/>
        {comment && <CommentList comment={comments} />}
      </Fragment>
    )
  }
  else{
    return(
      <h1 className='text-2xl text-white font-semibold'>Loading</h1>
    )
  }
}

export async function getServerSideProps(context){
  const {params} = context
  async function fetchData(){
    const res = await fetch(`http://127.0.0.1:8000/event/${params.eventid}`)
    const data = await res.json()
    return data
  }
  try{
    const Data = await fetchData()
    return ({
      props:{
        event:Data
      }
    })
  }
  catch(err){return{notFound:true}}
}

