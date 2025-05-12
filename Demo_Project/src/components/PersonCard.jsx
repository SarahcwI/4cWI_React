import React from 'react'

export default function PersonCard({name, titel, imageUri}) {
  return (
    <div className='border grid grid-cols-2 h-40'>
        <div className='p-4'>
            <h2 className='font-bold text-xl'>{name}</h2>
            <h4>{titel}</h4>

        </div>
        <div className='bg-green-400 w-full'>
            <img src={imageUri} alt='Person' className='object-cover w-full h-full'/>  
        </div>
    </div>
  )
}
