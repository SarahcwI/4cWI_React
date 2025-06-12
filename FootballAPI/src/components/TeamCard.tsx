import React from 'react'

type Props = {
    name: string
    shortName?: string,
    icon: string
}

export default function TeamCard({name, shortName, icon}: Props) {
  return (
    <div className='
    border-6
    border-gray-300
    fit-content
    bg-gray-200  
    p-4 m-2 rounded-lg 
    shadow-lg 
    flex flex-col 
    items-center
    hover:bg-gray-300'>
      <div className='underline font-bold text-xl'>{name}</div>
      <img width={100} src={icon} alt="team icon"  />
      <div className=''>{shortName}</div>

    </div>
  )
}