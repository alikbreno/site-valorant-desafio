import React, { useEffect, useState } from 'react'
import axios from "../api"
import { Swiper, SwiperSlide } from 'swiper/react'

const Inicial = () => {

  const [mapas, setMapas] = useState([])

  useEffect(() => {
    axios.get('/v1/maps')
    .then(response => {return response.data})
    ////atribui ao array "mapas" os dados e filtrei dela os mapas sem bombsite
    .then(response => setMapas(response.data.filter(mapa => mapa.tacticalDescription !== null)))
    .catch(error => console.error("Ocorreu um erro: ", error))
  }, [])

  return (
    <div className='container-carrossel'>
      <h1>Mapas</h1>

      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay
        loop
      >
        {mapas.map(mapa => (
          <SwiperSlide key={mapa.uuid}>
            <img 
              src={mapa.splash} 
              alt={mapa.displayName}
              className='img-carrossel' 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Inicial
