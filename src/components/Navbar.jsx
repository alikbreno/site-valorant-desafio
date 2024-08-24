import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/">Início</Link>
        <Link to="/agentes">Agentes</Link>
    </div>
  )
}

export default Navbar
