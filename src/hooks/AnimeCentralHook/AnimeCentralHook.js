import { useContext } from "react"
import AnimeCentralContext from "../../context/AnimeCentralContext/AnimeCentralContext"

// caio<- para organizar, criamos um hook para utilizar do nosso contexto liberando tudo que ele resultar.
export const AnimeCentralHook = ()=>{
    return useContext(AnimeCentralContext)
}