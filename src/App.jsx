import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Inicial from './pages/Inicial'
import Agentes from './pages/Agentes'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Inicial/>}/>
          <Route path='/agentes' element={<Agentes/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
