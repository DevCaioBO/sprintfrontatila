import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AnimeCentralProviders from './providers/AnimeCentralProviders/AnimeCentralProviders.jsx'
import AnimeCentralProject from './pages/AnimeCentralProject/AnimeCentralProject.jsx'





export default function AnimeCentralFront() {




  return (
    //caio<- Abraçamos o contexto de nossas rotas,
    //caio<-  ou de nossa árvore de componentes com nosso meio de propagar valores armazenados
    <AnimeCentralProviders>
      <AnimeCentralProject/>
    </AnimeCentralProviders>
  )
}


