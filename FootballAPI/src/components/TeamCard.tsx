import React from 'react'

type Props = {
    name: string
    shortName?: string,
    icon: string
}

export default function TeamCard({name, shortName, icon}: Props) {
  return (
    <div className='border'>
      <div>{name}</div>
      <div>{shortName}</div>
      <img src={icon} alt="team icon" />
    </div>
  )
}