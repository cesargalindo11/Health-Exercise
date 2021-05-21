import React, { useState } from 'react';
import '../assets/css/App.css';
import { Link, useHistory } from 'react-router-dom'
import { toast } from "react-toastify";
import { store } from '../firebaseConfig';
import Niveles from '../components/Niveles'



import '../App'
const Login = () => {

  const historial = useHistory()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const usuarioGet =[]; 



  const LoginUsuario = (e) => {
    e.preventDefault()
    if(email!='' && pass!=''){
      store.collection("registro").doc(email).get()

      .then(function (snapshot) {
        if (snapshot.exists) {

          var pwd = snapshot.get("Password");
          if (pwd === pass) {

            var correo = snapshot.get("Email");
             
              usuarioGet.push(correo);
            
            historial.push('/Niveles')
          } else {

            return toast(" Contraseña Incrorrecta", { type: "warning", autoClose: 1000 });

          }

        } else {

          return toast("El correo es incorrecto", { type: "warning", autoClose: 1000 });

        } // true


      });
    }else{
      return toast("campos obligatorios", { type: "warning", autoClose: 2000 });
    }
  
  }

//console.log(usuarioGet);
  return (
    <>
        {/* <Niveles valores="cesar@gmail.com"></Niveles> */}
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
                required
                onChange={(e) => { setEmail(e.target.value) }}
                
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
                required
                onChange={(e) => { setPass(e.target.value) }}
                
              />
            </div>

            <button
              onClick={LoginUsuario}
              className="btn btn-info btn-block mt-4">
              Iniciar Sesion
                   </button>

          </form>
        </div>
        <div className='col'></div>

      </div>
    </>
  );
}


export default Login