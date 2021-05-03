import React, { useState } from 'react';
import '../assets/css/App.css';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { toast } from "react-toastify";

import '../App'
const Login = () =>{

    const historial = useHistory()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [msgerror, setMsgError] = useState(null)
    
    const LoginUsuario = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, pass)

        .then( (userCredential) => {
          var user = userCredential.user;
          historial.push('/')
          
         
        })
        .catch( (err) => {
          return toast("Correo y/o Contraseña Incrorrecta", { type: "warning", autoClose: 1000 });
        })
      }
     


      
    return (
        <div className=' row mt-15'>

            <div className='col'></div>
            <div className='col bg-t'>

                <form onSubmit={LoginUsuario} className='form-group'>


                    <div className="input-group mb-3">
                        <div className='input-group-prepend'>
                            <span className="input-group-text"> Correo</span>
                        </div>
                        <input
                            className='form-control'
                            placeholder='Introduce tu correo electronico'
                            type="email"
                            name="correo"
                            onChange={(e) => { setEmail(e.target.value)}}
                        />
                    </div>

                    <div className="input-group mb-3">
                        <div className='input-group-prepend'>
                            <span className="input-group-text">Contraseña</span>
                        </div>
                        <input
                            className='form-control'
                            placeholder='Introduce una contraseña'
                            type="password"
                            name="password"
                            onChange={(e) => { setPass(e.target.value)}}
                        />
                    </div>

                    <button 
                    onClick= {LoginUsuario}
                    className="btn btn-info btn-block mt-4">
                        Iniciar Sesion
                   </button>

                </form>

                {
          msgerror != null
          ? (
            <div>
              
              {msgerror}
            </div>
          )
          : (
            <span></span>
          )
        }
            </div>
            <div className='col'></div>

        </div>
    );
}


export default Login