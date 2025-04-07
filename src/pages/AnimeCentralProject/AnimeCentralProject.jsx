import React, { useEffect } from 'react';
import { AnimeCentralHook } from '../../hooks/AnimeCentralHook/AnimeCentralHook.js';
import CardAnimeView from '../../components/CardAnimeView/CardAnimeView.jsx';
import CardAnimeButton from '../../components/CardAnimeButton/CardAnimeButton.jsx';

export default function AnimeCentralProject() {
  //caio<- Aqui chamamos esse hook que criamos
  const { animeData,setAnimeData,setChanged,changed } = AnimeCentralHook();

  // caio<- Debuggamos/pegamos a resposta da api, sempre antes de usarmos a api que desejamos
  useEffect(() => {
    console.log(animeData);
  }, [animeData]);

  //caio<- caso o anime n exista ou quando estiver carregando por exemplo,
  //  apesar que preparamos um carregamento em formato de aviso 
  if (!animeData) {
    return (
      <div className="flex items-center justify-center min-h-screen h-full w-full bg-black text-white text-xl font-bold animate-pulse">
        Carregando anime aleatório...
      </div>
    );
  }
  //caio<- trazendo os componentes <
  //  card que contem o anime e as devidas props a apresentar <
  //  button que dispara a chamada para um novo anime
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-[#0c0437] via-[#02061a] to-[#0a1397] text-white px-4">
      {/*caio<- alimentamos as props com aquilo que recebemos do nosso consumo de api */}
      <CardAnimeView ImageAnime={animeData.images?.webp.large_image_url} AltForImage={animeData.title} AnimeTitle={animeData.title} AnimeSinopse={animeData.synopsis} AnimeEpisodes={animeData.episodes}/>
    <CardAnimeButton textForButton={"Ver outro Anime"} colorForButtonName={"blue"}     onClick={()=>setChanged(!changed)}/>
    {/*caio<- Essa foi a primeira sprint de front, interessante pois conhecemos muito sobre componentização */}

    </div>
  );
}