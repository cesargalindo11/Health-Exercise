import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import './Login'
import { auth, store } from '../firebaseConfig';
import '../assets/css/App.css';
 

const Menu = () => {


  const historial = useHistory()
  const [usuario, setUsuario] = useState(null)
  const [nombre, setNombre] = useState(null)


  const CerrarSesion = () => {

    auth.signOut()
    setUsuario(null)
    historial.push('/login')

  }
const nombreUsuario=async(correo)=>{
  
  store.collection("registro").where("Email", "==", correo)
  .get()
  .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

          console.log(doc.data());
          setNombre( doc.data().Nombres)
          //console.log(doc.id, " => ", doc.data());
      });
  })
  .catch((error) => {
      console.log("Error getting documents: ", error);
  });
}
console.log(nombre);
  useEffect(() => {

  
    auth.onAuthStateChanged((user) => {

      if (user) {

        setUsuario(user.email)
        nombreUsuario(user.email);
        console.log(user.email);
        
      }else{
        historial.push('/login')
      }
     

    })

  }, [historial])

  return (
    <div>



      <nav className='.barra-content color'>

        <ul className='barra '>

          <div className="logo">
            {
              usuario ? <a href="/niveles"><img src="logo.png" alt="logo" /> </a>:<a href="/"><img src="logo.png" alt="logo" /> </a>
            }
            
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
           
              {
                usuario
                  ? <h3 className='nav-link' >{nombre}</h3>
                  : (<span></span>)
              }
            
           
            <li className='nav-item' >
              
           
              {
                usuario
                  ?
                  (
                  <button
                  
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