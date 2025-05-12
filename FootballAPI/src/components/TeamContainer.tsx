import React from 'react'
import TeamCard from './TeamCard'

type Props = {}

export default function TeamContainer({}: Props) {
  return (
    <div>
    <div className='grid grid-cols-3 gap-4 w-full'>
        <TeamCard name='Manchester City' shortName='MCI' icon='https://picsum.photos/200/300'/>
        <TeamCard name='Manchester City' shortName='MCI' icon='https://picsum.photos/200/300'/>
        <TeamCard name='Manchester City' shortName='MCI' icon='https://picsum.photos/200/300'/>
        <TeamCard name='Manchester City' shortName='MCI' icon='https://picsum.photos/200/300'/>
        <TeamCard name='Manchester City' shortName='MCI' icon='https://picsum.photos/200/300'/>
    </div>
    </div>
  )
}