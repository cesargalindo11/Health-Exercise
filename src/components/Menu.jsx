import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import './Login'
import { auth, store } from '../firebaseConfig';
import '../assets/css/App.css';

const Menu = () => {


  const historial = useHistory()
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {


    auth.onAuthStateChanged((user) => {

      if (user) {
        //window.location.replace('');
        setUsuario(user.email)
        
      }

    })

  }, [])

  const CerrarSesion = () => {

    auth.signOut()
    setUsuario(null)
    historial.push('/login')

  }


  return (
    <div>



      <nav className='.barra-content color'>

        <ul className='barra '>

          <div className="logo">
            <a href="/#"><img src="logo.png" alt="logo" /> </a>
          </div>
          <div className="botones nav">

            <li className='nav-item'>
              {
                !usuario
                  ? <Link className='nav-link' to='/login'>Sesion</Link>
                  : (<span></span>)
              }
            </li>

            <li className='nav-item'>
              {
                !usuario
                  ? <Link className='nav-link' to='/registro'>Registro</Link>
                  : (<span></span>)
              }
            </li>
            <li className='nav-item' >

              {
                usuario
                  ? (<button
                    onClick={CerrarSesion}
                    className='barra btn btn-danger '>
                    Cerrar sesion
                  </button>)
                  : (<span></span>)
              }
            </li>

          </div>

        </ul>



      </nav>
    </div>

  )
}

export default Menu;