import React, { useState } from 'react';
import '../assets/css/App.css';
import { Link, useHistory } from 'react-router-dom'
import { toast } from "react-toastify";
import { auth,store } from '../firebaseConfig';
import Niveles from '../components/Niveles'
import '../App'

const RecuperarContraseña = () => {
  const historial = useHistory();
const [email, setEmail] = useState('');

const recuperar = React.useCallback(async(e) => {
  e.preventDefault()
  if(email!=''){
    try {
      await auth.sendPasswordResetEmail(email)
      setEmail('')
      historial.push('/login') 
      return toast("Solicitud Enviada ", { type: "warning", autoClose: 1000 }); 
  } catch (error) {
      if(error.code === 'auth/user-not-found'){
        return toast("Correo no Existe", { type: "warning", autoClose: 1000 });
      }
  }
  }else{
    return toast("Campo Obligatorio", { type: "warning", autoClose: 2000 });
  }
})
    return(
        
        <div>
             <form onSumbit={recuperar}>
            <div className = 'recuperar'>       
                    ¿Olvidaste tu Contraseña?
            </div>   
        <div className='row mt-30'>
        <div className='col'></div>
        <div className='col bg-t1'>
              <div className="input-group mb-2">
                <div className='input-group-prepend'>
                  <span className="input-group-text"> Correo </span>
                </div>
                <input
                  className='form-control'
                  placeholder='Introduce tu correo electronico'
                  type="email"
                 name="correo"
                 onChange={(e) => { setEmail(e.target.value) }}
              />
            </div>
            <button onClick={recuperar}
              className="btn btn-info btn-block mt-2">
              Enviar
            </button>
        </div>
        <div className='col'></div>
      </div>
      </form>
      </div>
    )
}
export default RecuperarContraseña 