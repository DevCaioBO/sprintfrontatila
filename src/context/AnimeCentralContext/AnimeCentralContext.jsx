import { createContext, useEffect, useState } from "react";
import api from "../../api/api";
//caio<- Aqui está a criação de um contexto, daqui saem aqueles animes aleatórios
const AnimeCentralContext = createContext();

//caio<- Criamos um provider que servira como uma versão enxuta da chamada do nosso contexto depois
export function AnimeCentralProvider({ children }) {
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [changed,setChanged] = useState(false)

  //caio<- Função que tenta buscar um anime válido, com um filtro que previne de coisas erradas
  //caio<- já que a analise dessa api precisa ser profunda
  const fetchFilteredAnime = async (attempt = 0) => {
    if (attempt >= 10) {
      console.warn("Anime seguro não encontrado após várias tentativas.");
      setLoading(false);
      return;
    }

    try {
      const response = await api.get("/random/anime");
      const anime = response.data.data;

      const rating = anime.rating || "";
      //caio<- está api pode resultar em animes estranhos, por isso criei um filtro que previne apenas animes normaos
      const hasAdult = rating.includes("Rx") || rating.includes("R+") || rating.includes("H") ;
      const hasImage = anime.images?.webp?.large_image_url;
      const hasSynopsis = anime.synopsis && anime.synopsis.length > 30;

      if (hasAdult || !hasImage || !hasSynopsis) {
        console.log(`caio<- Ignorando anime inadequado. Tentativa ${attempt + 1}`);
        return fetchFilteredAnime(attempt + 1);
      }

      setAnimeData(anime);
      //caio<- setamos um tempo a mais para o usuário ler o aviso de uso
      //caio<- sendo assim uma especie de cookies, para proteger de uso acidental
      setTimeout(() => {
        setLoading(false);
      }, 2000);

    } catch (error) {
      console.error("Erro ao buscar anime:", error);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };
  //caio<- existência da tela de carregamento
  useEffect(() => {
    setLoading(true);
    fetchFilteredAnime();
  }, [changed]);
  //alimentando nosso contexto, e passando o valor dele para o próximo filho
    return (
        <AnimeCentralContext.Provider value={{ animeData, loading,setAnimeData,setChanged,changed }}>
            {loading?<div className="w-full h-full text-center text-xs md:text-base bg-black/95 text-white uppercase flex flex-col font-extrabold justify-center items-center fixed inset-0">
            <p>Antes de testar vale avisar, que ele busca animes aleatórios: ví alguns que são estranhos por assim dizer :/</p>
            <p>Aguarde e leia isso com calma - carregando ...</p></div>:null}
            {children}
        </AnimeCentralContext.Provider>
    )
}
//caio<- exportando nosso contexto
export default AnimeCentralContext;








