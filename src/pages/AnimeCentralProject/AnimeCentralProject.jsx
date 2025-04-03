import React, { useEffect } from 'react'
import { AnimeCentralHook } from '../../hooks/AnimeCentralHook/AnimeCentralHook.js'


export default function AnimeCentralProject() {
    const {animeData} = AnimeCentralHook()
 useEffect(()=>{
    console.log()
 },[animeData])
  return (
    <div className='flex w-full justify-center py-10 rounded-xl object-cover min-h-lvh bg-gray-900'>
      <div className='w-[300px] h-[300px]'>
    <img src={animeData.images?.webp.large_image_url} alt="" />
    </div>
    </div>
  )
}

