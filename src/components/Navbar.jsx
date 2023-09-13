import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to='/home'>Home</Link>
      <Link to='/contact'>Contato</Link>

    </nav>
  )
}

export default Navbar