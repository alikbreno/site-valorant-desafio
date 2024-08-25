import React, { useEffect, useState } from 'react'
import axios from '../api'
import Cards from '../components/Cards'

const CadaAgent = ({ id }) => {

    const [agentes, setAgentes] = useState([])

    useEffect(()=>{
      axios.get('/v1/agents')
      .then(response => {return response.data})
      .then(response=> setAgentes(response.data.filter(agente => agente.isPlayableCharacter === true)))
      .catch(error=> console.error("Ocorreu um erro: ", error))
    }, [])
  

    return (
        <div>
            {agentes
                .filter(agente => agente.uuid === id)
                .map(agente => (
                    <div key={agente.uuid}>
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
                ))}
        </div>
    )
}

export default CadaAgent
