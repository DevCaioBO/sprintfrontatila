import React, { useEffect } from 'react'
import { AnimeCentralHook } from '../../hooks/AnimeCentralHook/AnimeCentralHook'


export default function AnimeCentralProject() {
    const {animeData} = AnimeCentralHook()
    useEffect(()=>{
        console.log(animeData)
    },[])
  return (
    <div className='flex'>
    <p>{animeData.mal_id}</p>
    </div>
  )
}

