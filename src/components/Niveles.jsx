import React, { useEffect, useState } from 'react';
import '../assets/css/App.css';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { auth } from '../firebaseConfig';
const Niveles = (props) => {
  // const historial = useHistory()
  // const [usuario, setUsuario] = useState(null)

  // const CerrarSesion = () => {

  //  // store.signOut()
  //   setUsuario(null)
  //   historial.push('/')

  // }

  const { history } = props;

  return (
    <div>

      
      <div class="container">

        <React.Fragment>
          <h1 style={{ color: 'black' }}>
            Niveles
          </h1>
        
          <div className='Niveles'>
            <div class="container">
              <img src='./NivelesImagenes/CuerpoPrincipiante.jpg' className='CuerpoPrincipiante' />
              <button onClick={() => history.push('/categoriaprincipiante')} type="button" class="btn btn-info btn-block mt-4">Nivel Principiante</button>
            </div>
            <div class="container">
              <img src='./NivelesImagenes/CuerpoIntermedio.jpg' className='CuerpoPrincipiante'></img>
              <button onClick={() => history.push('/categoriaintermedio')} type="button" class="btn btn-info btn-block mt-4">Nivel Intermedio</button>
            </div>
            <div class="container">
              <img src='./NivelesImagenes/CuerpoAvanzado.jpg' className='CuerpoPrincipiante'></img>
              <button onClick={() => history.push('/categoriaavanzado')} type="button" class="btn btn-info btn-block mt-4">Nivel Avanzado</button>
            </div>
          </div>
        </React.Fragment>
      </div>
    </div>
  )
}

export default withRouter(Niveles);
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
      }<div class="container BotonesNivel p-3 my-3 border" >
        <button
          //onClick={CerrarSesion}
          className='barra btn btn-danger '>
          Cerrar Sesion
        </button>
      </div>
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
