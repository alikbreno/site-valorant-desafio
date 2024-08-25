import React, { useEffect, useRef, useState } from 'react'
import axios from '../api'
import { FaSearch } from 'react-icons/fa'
import Navbar from './Navbar'

const Header = () => {

  const [lista, setLista] = useState([]) //useState utilizado para armazenar a lista de dados
  const [buscaAberto, setBuscaAberto] = useState(false)  //gerenciar o estado booleano dela para abrir o input
  const [busca, setBusca] = useState("")  //utilizado para armazenar o que for digitado no input da busca

  //Uma referência que é anexado ao input de busca
  const inputRef = useRef(null)

  //Utilizei a biblioteca axios para consumir a api. A base do endpoint foi importada do index da pasta api
  useEffect(()=>{            
    axios.get("/v1/agents")  
    .then(response => {return response.data})
    //atribui a lista os dados e filtrei dela o sova repetido
    .then(response => setLista(response.data.filter(agente => agente.isPlayableCharacter === true)))
    .catch(error => console.error("Ocorreu um erro: ", error))
  }, [])

  //função que ao ser utilizado vai mudar o valor booleano para o contrário que estava
  const abrirBusca = async () =>{
    setBuscaAberto(!buscaAberto)
  }

  //useEffect para toda vez que a busca for aberta o input ja ficar em "focus" e se tiver fechado tirar o valor da "busca"
  useEffect(() => {
    if(buscaAberto){
      inputRef.current.focus()
    }
    if(buscaAberto === false){
      setBusca("")
    }
  }, [buscaAberto])
 

  // fazer map de classe 



  return (
    <div>
      <FaSearch onClick={abrirBusca}/>
      {buscaAberto && (
        <input 
          type='text' 
          name='busca' 
          id='busca' 
          placeholder='Pesquisar'
          ref={inputRef}
          value={busca} 
          onChange={e => setBusca(e.target.value)}
        />)}
        {lista.map(agente => 
          (<li>{agente.rule.displayName}</li>)
        )}
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
