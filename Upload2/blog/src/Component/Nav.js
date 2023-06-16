import React from 'react'
import './nav.css';
import {Link} from 'react-router-dom';
import logo from './images/logo.png';

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
          <Link to="#" className='nav-item'><img src={logo} className='logo' alt='tipcy-logo'/></Link>
          <Link to="/" className='nav-item'>Home</Link>
          <Link to="/recipie" className='nav-item'>Recipe</Link>
          <Link to="/about" className='nav-item'>About</Link>
        </nav>
    </div>
  )
}

export default Nav
