import React, { useEffect, useState } from 'react'
import TeamCard from './TeamCard'



interface Team {
  teamID: number
  teamName: string
  shortName: string
  teamIconUrl: string
}
type Props = {}

export default function TeamContainer({}: Props) {

  const [teams, setTeams] = useState<Team[]>([])

  // Fetch data from the API
   useEffect(() => {
    fetch('https://api.openligadb.de/getbltable/bl1/2024').then((response) => {
        response.json().then((data) => {
            setTeams(data);
        });
      });

   },[]);



  return (
    <div>
    <div className='grid grid-cols-3 gap-4 w-full'>
      {teams.map((team: any) => (
        <TeamCard key={team.teamID} name={team.teamName} shortName={team.shortName} icon={team.teamIconUrl} />
        ))}  
    </div>
    </div>
  )
}