import React, { useEffect, useState } from 'react';
import '../assets/css/App.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebaseConfig';

const Niveles = () => {
  const historial = useHistory()
  const [usuario, setUsuario] = useState(null)

  const CerrarSesion = () => {

    store.signOut()
    setUsuario(null)
    historial.push('/')

  }

  return (
    <div>

      <div class="container BotonesNivel p-3 my-3 border" >
        <button
          //onClick={CerrarSesion}
          className='barra btn btn-danger '>
          Cerrar Sesion
        </button>
      </div>
      <div class="container p-3 my-3 border">

        <h1 style={{ color: 'white' }}>
          Niveles
        </h1>
       
        <div className='Niveles'>
          <div class="container p-3 my-3 border">
            <img src='./NivelesImagenes/CuerpoPrincipiante.jpg' className='CuerpoPrincipiante' />
            <button type="button" class="btn btn-info btn-block mt-4">Nivel Principiante</button>
          </div>
          <div class="container p-3 my-3 border">
            <img src='./NivelesImagenes/CuerpoIntermedio.jpg' className='CuerpoPrincipiante'></img>
            <button type="button" class="btn btn-info btn-block mt-4">Nivel Intermedio</button>
          </div>
          <div class="container p-3 my-3 border">
            <img src='./NivelesImagenes/CuerpoAvanzado.jpg' className='CuerpoPrincipiante'></img>
            <button type="button" class="btn btn-info btn-block mt-4">Nivel Avanzado</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Niveles;
/*
<h1>Niveles</h1>
      {

          usuario
          ? ( <button 
              onClick={CerrarSesion}
              className='barra btn btn-danger '>
              Cerrar sesion
              </button> )
          : ( <span></span> )
      }
      <button
              //onClick={CerrarSesion}
              className='barra btn btn-danger '>
              Perfil
              </button>  
              
              
              <button
          //onClick={CerrarSesion}
          className='barra btn btn-danger '>
          Perfil
        </button>*/
