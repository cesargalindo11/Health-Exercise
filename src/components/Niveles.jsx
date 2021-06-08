import React, { useEffect, useState } from 'react';
import '../assets/css/App.css';
import { Link, useHistory, useLocation, useParams, withRouter } from 'react-router-dom';
import { auth } from '../firebaseConfig';
const Niveles = (props) => {

  //let location=useLocation();
  //console.log(location);
  let {search}=useLocation();
  let query=new URLSearchParams(search);
  console.log(query);

  let start = query.get("correo");
  console.log(start);

  //let params =useParams();
  //console.log(params);
  const{correo}=props
  const historial = useHistory()
   const [usuario, setUsuario] = useState(correo)


  const { history } = props;

  return (
    <div>

      
      <div class="container ">
      <h1 style={{ color: 'black' }}>
            Niveles
          </h1> 
          <div class="backgroud-card"  >
        <React.Fragment>
       
        
          <div className='Niveles'>
            <div class="container">
              <img src='./NivelesImagenes/uno.jpg' className='CuerpoPrincipiante' />
              <button onClick={() => history.push('/categoriaprincipiante')} type="button" class="btn btn-info btn-block mt-4">{<h2>Nivel Principiante</h2>}</button>
            </div>
            <div class="container">
              <img src='./NivelesImagenes/dos.jpg' className='CuerpoPrincipiante'></img>
              <button onClick={() => history.push('/categoriaintermedio')} type="button" class="btn btn-info btn-block mt-4">{<h2>NIvel Intermedio</h2>}</button>
            </div>
            <div class="container">
              <img src='./NivelesImagenes/tres.jpg' className='CuerpoPrincipiante'></img>
              <button onClick={() => history.push('/categoriaavanzado')} type="button" class="btn btn-info btn-block mt-4">{<h2>Nivel Avanzado</h2>}</button>
            </div>
          </div>
        </React.Fragment>
      </div>

      </div>      

    </div>
  )
}

export default withRouter(Niveles);
/**{

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
        </button> */