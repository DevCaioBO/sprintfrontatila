import React, { useEffect } from 'react'
import { AnimeCentralHook } from '../../hooks/AnimeCentralHook/AnimeCentralHook.js'


export default function AnimeCentralProject() {
    const {animeData} = AnimeCentralHook()
 useEffect(()=>{
    console.log(animeData)
 },[])
  return (
    <div className='flex '>
        
    <p>a</p>
    </div>
  )
}

