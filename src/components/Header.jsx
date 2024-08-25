import React, { useEffect, useRef, useState } from 'react'
import axios from '../api'
import { FaSearch } from 'react-icons/fa'
import style from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {

  const [lista, setLista] = useState([]) //useState utilizado para armazenar a lista de dados
  const [buscaAberto, setBuscaAberto] = useState(false)  //gerenciar o estado booleano dela para abrir o input
  const [busca, setBusca] = useState("")  //utilizado para armazenar o que for digitado no input da busca

  //Uma referência que é anexado ao input de busca
  const inputRef = useRef(null)

  //Utilizei a biblioteca axios para consumir a api. A base do endpoint foi importada do index da pasta api
  useEffect(() => {
    axios.get("/v1/agents")
      .then(response => { return response.data })
      //atribui a lista os dados e filtrei dela o sova repetido
      .then(response => setLista(response.data.filter(agente => agente.isPlayableCharacter === true)))
      .catch(error => console.error("Ocorreu um erro: ", error))
  }, [])

  //useEffect para toda vez que a busca for aberta o input ja ficar em "focus" e se tiver fechado tirar o valor da "busca"
  useEffect(() => {
    if (buscaAberto) {
      inputRef.current.focus()
    }
    if (buscaAberto === false) {
      setBusca("")
    }
  }, [buscaAberto])

  //função que ao ser utilizado vai mudar o valor booleano para o contrário que estava
  const abrirBusca = () => {
    setBuscaAberto(!buscaAberto)
  }

  //função pra a lista não ficar flutuando quando o input nãp tiver em "focus"  
  //leve delayzinho para a lista não fechar antes de acessar o endpoint do link
  const sairFoco = () =>{
    setTimeout(() => {
      setBusca("")
      setBuscaAberto(false)
    }, 200);
  }


  return (
    <div className={style.container}>
      <div className={style.menu}>
        <Link to="/">Início</Link>
        <Link to="/agentes">Agentes</Link>
      </div>
      <div className={style.lupa}>
        {buscaAberto && (
          <input
            type='text'
            name='busca'
            id='busca'
            placeholder='Pesquisar'
            ref={inputRef}
            value={busca}
            onChange={e => setBusca(e.target.value)}
            onBlur={sairFoco}
          />)}
        <FaSearch onClick={abrirBusca} />
      </div>

      <div className={style.listaPesquisa}>
        {busca &&(
          <ul>
            {lista
              .filter(agente => {
                const classe = agente.role.displayName.toLowerCase()
                const nome = agente.displayName.toLowerCase()
                return nome.includes(busca.toLowerCase()) || classe.includes(busca.toLowerCase())
              })
              .map(agente => (<li key={agente.uuid}><Link to={`/agentes/${agente.uuid}`}>{agente.displayName} <img className={style.img} src={agente.role.displayIcon} alt="role" /></Link></li>))}
          </ul>)}
      </div>
    </div>

  )
}

export default Header
