import React from 'react'
// caio<- sempre 'export' seu componente para habilitar sua importabilidade :)
export default function CardAnimeView({ImageAnime,AltForImage,AnimeTitle,AnimeSinopse,AnimeEpisodes}) {
    //caio<- Alimentadas as props agora passamos os devidos valores,
    //caio<-  sempre dê nomes que referenciem a utilidade da prop
  return (
    <div className="w-[320px] sm:w-[350px] mt-10 bg-[#1c1b2e] border-2 border-blue-600 rounded-3xl shadow-[0_0_20px_#8b5cf6] transition-transform hover:scale-105 duration-500 animate-fade-in">
      {/*caio<- Alimento utilização da image recebida */}
    <img
      src={ImageAnime}
      alt={AltForImage}
      className="w-full h-[400px] object-cover rounded-t-3xl"
    />
          {/*caio<- Alimento utilização do título do anime recebido */}
    <div className="p-4 text-center">
    <p>Titulo: </p>
      <h2 className="text-xl font-bold font-anime mb-2 text-blue-300">
        {AnimeTitle}
      </h2>
            {/*caio<- Alimento utilização da sinopse recebida/prévia descritiva desse anime */}
      <p className="text-sm text-gray-200 ">
        Sinopse:
      </p>
      <p className="text-sm text-gray-200 ">

        {AnimeSinopse || 'Sem sinopse disponível.'}
      </p>
            {/*caio<- Alimento utilização da quantidade  recebida de episódeos de tal anime */}
      <p className="text-sm my-2 text-gray-200 ">
        Episódeos:
      </p>
      <p className="text-sm text-gray-200 ">

        {AnimeEpisodes || 'Sem episodios disponíveis.'}
      </p>
    </div>
  </div>
  )
}
