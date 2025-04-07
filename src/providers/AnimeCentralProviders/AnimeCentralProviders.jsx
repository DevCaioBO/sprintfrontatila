import React from 'react'
import { AnimeCentralProvider } from '../../context/AnimeCentralContext/AnimeCentralContext'
//caio<- utilizei a ideia de providers/providenciando nosso retorno contextualizado para o projeto
//caio<- evitando códigos gigantescos sem muito sentido.
export default function AnimeCentralProviders({children}) {
    return(
    <AnimeCentralProvider>
        {children}
    </AnimeCentralProvider>
    )
}
