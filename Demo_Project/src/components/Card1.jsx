import React from 'react'

export default function Card({name, jobtitel, description}) {
  return (
    <div className = "bg-green-300 border-2 border-green-500 rounded-lg p-4 m-4 w-full">
       <p className = "font-bold">{name}</p>
       <p>{jobtitel}</p>
      <p>{description}</p>
    </div>
   
  )
  
}
