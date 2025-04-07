import React from 'react'
// caio<- sempre 'export' seu componente para habilitar sua importabilidade :)
export default function CardAnimeButton({textForButton,colorForButtonName, onClick}) {
  return (
    //caio<- Dê mesmo modo alimentamos o component animeButton com as propriedades texto, cor e click
    //caio<- vale avisar que o tailwind, não é muito preciso quando se trata de valores dinâmicos n existentes em seus valores fixos
    //caio<- porém para demonstrar melhor alí a utilização de props, preferí fazer assim :)
    <button
    onClick={onClick}
    className={`mt-8 px-8 py-3 my-20 bg-${colorForButtonName}-600 hover:bg-${colorForButtonName}-700 text-white font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-${colorForButtonName}-500/50`}
  >
    {textForButton}
  </button>
  )
}
