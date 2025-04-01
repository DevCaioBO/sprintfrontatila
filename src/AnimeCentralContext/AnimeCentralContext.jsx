import { createContext, useEffect, useState } from "react";
import api from "../api/api";

const AnimeCentralContext = createContext()

export function AnimeCentralProvider({children}){
    const [animeData,setAnimeData] = useState([])
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        try{
            setLoading(true)
        const readMyAnimeForCentral = async()=>{
          const response = await api.get('/random/anime')
          setAnimeData(response.data)
          console.log(response.data)
        }
        readMyAnimeForCentral()
    }catch(e){
        console.log(e)
    }finally{
        setLoading(false)
    }
      },[])
      return(
        <AnimeCentralContext.Provider  value={{animeData,loading}}>
    {children}
</AnimeCentralContext.Provider>
      )
}
export default AnimeCentralContext;








