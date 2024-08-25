import React, { useEffect, useState } from 'react'
import axios from '../api'

const Agentes = ({ id }) => {

  const [agentes, setAgentes] = useState([])

  useEffect(()=>{
    axios.get('/v1/agents')
    .then(response => {return response.data})
    .then(response=> setAgentes(response.data.filter(agente => agente.isPlayableCharacter === true)))
    .catch(error=> console.error("Ocorreu um erro: ", error))
  }, [])


  return (
    <div>
      
    </div>
  )
}

export default Agentes
