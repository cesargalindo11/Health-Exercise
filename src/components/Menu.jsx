import React from 'react';
import { Link } from 'react-router-dom'
import './Login'

const Menu = () => {

  return (
    <div>



      <nav className='.barra-content'>

        <ul className='barra '>

          <div className="logo">
            <a href="/#"><img src="logo.png" alt="logo" /> </a>
          </div>
          <div className="botones nav">
            
            <li className='nav-item'>
              <Link className='nav-link' to='/login'>Sesion</Link>
            </li>
           
            <li className='nav-item'>
              <Link className='nav-link' to='/registro'>Registro</Link>
            </li>
            
          </div>

        </ul>

      </nav>
    </div>

  )
}

export default Menu