import React ,{ useEffect, useState } from 'react';
import { Link,useHistory} from 'react-router-dom'
import './Login'
import { auth, store } from '../firebaseConfig';
import '../assets/css/App.css';

const Menu = () => {


  const historial = useHistory()
  const [usuario, setUsuario] = useState(null)

  useEffect( () => {

    store.collection("registro").doc('cesar@gmail.com').get()

      .then(function (snapshot) {
        if (snapshot.exists) {         

            var correo = snapshot.get("Email");
             
             setUsuario(correo)
          
        }
      });
    /*
    auth.onAuthStateChanged( (user) => {

      if( user ){
        setUsuario('cesar@gmail.com')
        console.log(user.email);
      }

    })*/

  },[])

  const CerrarSesion = () => {

    //store.signOut()
    setUsuario(null)
    historial.push('/')

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
              ?<Link className='nav-link' to='/login'>Sesion</Link>
              :(<span></span>)
              }
            </li>
           
            <li className='nav-item'>
              {
              !usuario
              ?<Link className='nav-link' to='/registro'>Registro</Link>
                :(<span></span>)
              }
            </li>
            
          </div>

        </ul>
        
        {
          usuario
          ? ( <button 
              onClick={CerrarSesion}
              className='barra btn btn-danger '>
              Cerrar sesion
              </button> )
          : ( <span></span> )
        }


      </nav>
    </div>

  )
}

export default Menu