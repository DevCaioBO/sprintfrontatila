import React from 'react'
import { AnimeCentralProvider } from '../../AnimeCentralContext/AnimeCentralContext'

export default function AnimeCentralProviders({children}) {
    return(
    <AnimeCentralProvider>
        {children}
    </AnimeCentralProvider>
    )
}
