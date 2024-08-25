import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Inicial from './pages/Inicial'
import Agentes from './pages/Agentes'
import axios from './api'

const App = () => {

  const [agentes, setAgentes] = useState([])

  useEffect(()=>{
    axios.get('/v1/agents')
    .then(response => {return response.data})
    .then(response=> setAgentes(response.data.filter(agente => agente.isPlayableCharacter === true)))
    .catch(error=> console.error("Ocorreu um erro: ", error))
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Inicial/>}/>
          <Route path='/agentes' element={<Agentes/>}/>
          {agentes.map(agente => (
            <Route key={agente.uuid} path={`/agentes/${agente.uuid}`} element={<Agentes id={agente.uuid}/>}/>
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
