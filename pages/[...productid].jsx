import React from 'react'
import fs from "fs/promises"
import path from "path";

export default function DetailPage(prop) {
    const {product} = prop
  return (
    <div>
        <h1>{product.title}</h1>
        <h1>{product.description}</h1>
    </div>
  )
}

async function getData(){
    const filePath = path.join(process.cwd(),"assests","dummy-product.json");
    const JsonData = await fs.readFile(filePath)
    const data = JSON.parse(JsonData)
    return data
}


export async function getStaticProps(context){
    console.log("staic Active")
    const Data = await getData()
    const {params} = context
    const product = Data.products.find((item)=>{
        if(item.id === params.productid[0]){
            return item.toString()
        }
    })
    return({
        props:{
            product:product
        }
    })
}


export async function getStaticPaths(){
    console.log("path Active")
    const data = await getData()
    const Ids = data.products.map((item)=>{
        return `/${item.id}`
    })
    return({
        paths:Ids,
        fallback:false
    });
};
