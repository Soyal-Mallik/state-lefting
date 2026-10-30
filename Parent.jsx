import React from 'react'
import Child from './Child'

export default function Parent() {
   const data = "I am from parent"
   const handleChildData = (data1) =>{
    console.log(data1)
   }
   
  return (
    <div>
      <Child  data={data} onChildData = {handleChildData} />
    </div>
  )
}
