import React ,{ useEffect, useState } from 'react';
import { Link,useHistory} from 'react-router-dom'
import './Login'
import { store } from '../firebaseConfig';
import '../assets/css/App.css';
import Login from "../components/Login"

const Niveles = (props) => {

  const {valores}=props;
 
console.log(valores);

  const historial = useHistory()
  const [usuario, setUsuario] = useState(null)
  useEffect( () => {

    store.collection("registro").doc(valores).get()

      .then(function (snapshot) {
        if (snapshot.exists) {

          var email = snapshot.get("Email");
          setUsuario(email)
        }
      })

  },[])

  const CerrarSesion = () => {

    store.signOut()
    setUsuario(null)
    historial.push('/')

  }


  return (
    <div>


      <nav className='.barra-content'>

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
export default Niveles;