import { useContext } from "react"
import AnimeCentralContext from "../../AnimeCentralContext/AnimeCentralContext"


export const AnimeCentralHook = ()=>{
    return useContext(AnimeCentralContext)
}