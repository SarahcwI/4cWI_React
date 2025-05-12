import React from 'react'
import avatar from '../pictures/img_avatar.png';
export default function Card({name, jobtitle, description}) {
  return (
    <div className='bg-gray-500  w-20/100 border-2 border-gray-800 m-2 p-2'>
    <div className="">
        <img src={avatar} alt="Avatar" className='w-full'/>    
    </div>

    <div className = "bg-gray-500 p-4 m-1">

    <p className='font-bold'>{name}</p>
    <p>{jobtitle} & {description}</p>
    </div>
    </div>
  )
}
