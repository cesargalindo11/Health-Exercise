import React from 'react';
import {Link} from 'react-router-dom'


const Menu = () => {
  return(
    <div>
      <nav className= "">
        <ul className="navegacion">
          <li className='nav-item'>
            <Link className='nav-link' to='/'>Inicio</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/login'>Login</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/registro'>Registro</Link>
          </li>
        </ul>
      </nav>
    </div>
    
  )
}

export default Menu