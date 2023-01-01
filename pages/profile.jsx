import React from 'react'

export default function Profile({username}) {
  return (
    <div>{username}</div>
  )
}

export async function getServerSideProps(){
    console.log("Alive-server-side")
    return({
        props:{
            username:"max"
        }
    })
}
