import React, { useEffect, useState } from 'react'
import axios from '../api'
import { FaSearch } from 'react-icons/fa'
import Navbar from './Navbar'

const Header = () => {

  const [lista, setLista] = useState([]) //useState utilizado para armazenar a lista de dados
  const [buscaAberto, setBuscaAberto] = useState(false)  //gerenciar o estado booleano dela para abrir o input
  const [busca, setBusca] = useState("")  //utilizado para armazenar o que for digitado no input da busca


  useEffect(()=>{            //Utilizei a biblioteca axios para consumir a api. A base da url foi
    axios.get("/v1/agents")  //A base do endpoint foi importada do index da pasta api
    .then(response => {return response.data})
    .then(response => setLista(response.data))
    .catch(error => console.error("Ocorreu um erro: ", error))
  }, [])

  const abrirBusca = () =>{
    setBuscaAberto(!buscaAberto) //função que ao ser utilizado vai mudar o valor booleano para o contrário que estava
  }

  return (
    <div>
      <FaSearch onClick={abrirBusca}/>
      {buscaAberto && (
        <input 
          type='text' 
          name='busca' 
          id='busca' 
          placeholder='Pesquisar'
          value={busca} 
          onChange={e => setBusca(e.target.value)}
        />)}
      {busca && (
        <ul>
          {lista
            .filter(agente => {
              const nome = agente.displayName.toLowerCase()
              return nome.includes(busca.toLowerCase())
            })
            .map(agente => (<li key={agente.uuid}>{agente.displayName}</li>))}
        </ul>)}
        <Navbar/>
    </div>
  )
}

export default Header
