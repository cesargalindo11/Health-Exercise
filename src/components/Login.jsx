import React, { useState } from 'react';
import '../assets/css/App.css';
import { useHistory } from 'react-router-dom';
import { store } from '../firebaseConfig';
import { toast } from "react-toastify";

import '../App'
const Login = () => {

  const historial = useHistory()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')




  const LoginUsuario = (e) => {
    e.preventDefault()
    store.collection("registro").doc(email).get()

      .then(function (snapshot) {
        if (snapshot.exists) {

          var pwd = snapshot.get("Password");
          if (pwd === pass) {
            
            const usuarioGet = {
              Nombres: snapshot.get("Nombres"),
              Apellidos: snapshot.get("Apellidos"),
              Edad:snapshot.get("Edad"),
              Peso: snapshot.get("Peso"),
              Email: snapshot.get("Email"),
              Password:snapshot.get("Password"),
            };
            historial.push('/');
          } else {

            return toast(" Contraseña Incrorrecta", { type: "warning", autoClose: 1000 });

          }

        } else {

          return toast("El correo no existe", { type: "warning", autoClose: 1000 });

        } // true


      });
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
            </div>
            <div className='col'></div>

        </div>
    );
}


export default Login