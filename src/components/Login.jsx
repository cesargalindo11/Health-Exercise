import React, { useState } from 'react'
import '../assets/css/App.css'
import firebase from '../firebaseConfig'
import 'firebase/auth';
import '../App'
function Login() {

    const [email,setEmail] = useState("")
    const [pass, setPass]  = useState("")


    function iniciarSesion() {
     
        firebase.auth().signInWithEmailAndPassword(email, pass)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          alert(user)
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorCode,errorMessage)
        });
    
      }
      






    return (
        <div className=' row mt-15'>

            <div className='col'></div>
            <div className='col bg-t'>

                <form onSubmit={iniciarSesion} className='form-group'>


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

                    <button className="btn btn-info btn-block mt-4">
                        Iniciar Sesion
                   </button>

                </form>

            </div>
            <div className='col'></div>

        </div>
    );
}


export default Login