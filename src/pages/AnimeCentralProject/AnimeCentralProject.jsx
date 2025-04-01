import React, { useEffect } from 'react'
import { AnimeCentralHook } from '../../hooks/AnimeCentralHook/AnimeCentralHook.js'


export default function AnimeCentralProject() {
    const {animeData} = AnimeCentralHook()
 useEffect(()=>{
    console.log()
 },[animeData])
  return (
    <div className='flex '>
        
    <img src={animeData.images?.webp.large_image_url} alt="" />
    </div>
  )
}

