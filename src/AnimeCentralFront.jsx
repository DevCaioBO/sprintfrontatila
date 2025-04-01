import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from './api/api'

import AnimeCentralProject from './pages/AnimeCentralProject/AnimeCentralProject.jsx'

import { AnimeCentralProvider } from './AnimeCentralContext/AnimeCentralContext.jsx'


function AnimeCentralFront() {




  return (
    <AnimeCentralProvider>
      <AnimeCentralProject/>
    </AnimeCentralProvider>
  )
}

export default AnimeCentralFront
