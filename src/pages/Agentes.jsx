import React, { useEffect, useState } from 'react'
import axios from '../api'
import Cards from '../components/Cards'
import { Swiper, SwiperSlide } from 'swiper/react'

const Agentes = () => {

  //useState que vai armazenar o array de agentes
  const [agentes, setAgentes] = useState([])

  //Consumindo a api
  useEffect(()=>{
    axios.get('/v1/agents')
    .then(response => {return response.data})
    .then(response=> setAgentes(response.data.filter(agente => agente.isPlayableCharacter === true)))
    .catch(error=> console.error("Ocorreu um erro: ", error))
  }, [])


  return (
    <div className='container-carrossel'>
      <h1>Agentes</h1>

      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {agentes.map(agente => (
          <SwiperSlide key={agente.uuid}>
            <div className='cards-carrossel'> 
            <Cards 
              img={agente.fullPortrait} 
              nome={agente.displayName} 
              descricao={agente.description} 
              classe={agente.role.displayName} 
              iconeClasse={agente.role.displayIcon}
              background={agente.background}
              habilidades={agente.abilities}
            />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Agentes
