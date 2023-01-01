import Head from "next/head";
import React from 'react'

export default function MetaHead({title,description}) {
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content ={description}/>
    </Head>
  )
}
