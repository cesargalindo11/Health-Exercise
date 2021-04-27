import React, { useState } from 'react';
import '../assets/css/App.css'
import firebase from '../firebaseConfig'
import 'firebase/auth';

const Registro = () => {


  const [nombres, setNombres] = useState("")
  const [apellidos, setApellidos] = useState("")
  const [edad, setEdad] = useState("")
  const [peso, setPeso] = useState("")
  const [sexo, setSexo] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")




  const registrarUsuario = (e) => {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, pass)
      .then((userCredential) => alert('Usuario Registrado'))
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode, errorMessage);

      });
      writeUserData()
  }
  const writeUserData = () => {
    alert("formulario")
    /*firebase.database().ref('registro/' + "zzLetAa9ticg5C2e8zgC").set({
      Nombres:nombres,
      Apellidos: apellidos,
      Edad: edad,
      Peso:peso,
      Sexo:sexo,
      Email:email,
      Password:pass
  
    });*/
  }
  return (
    <div className='row mt-5'>

      <div className='col'></div>
      <div className='col bg-registro'>

        <form className='form-group'>
          <div>
            <div className="input-group mb-3">
              <div className='input-group-prepend'>
                <span className="input-group-text">Nombres</span>
              </div>
              <input
                className='form-control'
                placeholder='Introduce tu nombre'
                type="text"
                onChange={(e) => { setNombres(e.target.value) }} />
            </div>

            <div className="input-group mb-3">
              <div className='input-group-prepend'>
                <span className="input-group-text">Apellidos</span>
              </div>
              <input
                className='form-control'
                placeholder='Introduce tu apellido'
                type="text"
                onChange={(e) => { setApellidos(e.target.value) }} />
            </div>


            <div className="input-group mb-3">
              <div className='input-group-prepend'>
                <span className="input-group-text">Datos</span>
              </div>
              <input
                className='form-control'
                placeholder='Edad'
                type="number"
                onChange={(e) => { setEdad(e.target.value) }} />
              <input
                className='form-control'
                placeholder='Peso'
                type="number"
                onChange={(e) => { setPeso(e.target.value) }} />

            </div>

            <div className="form-check form-check-inline mb-3">
              <div className='input-group-prepend '>
                <span className="input-group-text mg-r">Sexo</span>
              </div>
              <input
                className='form-check-input'
                type="radio" value="mujer"
                onChange={(e) => { setSexo(e.target.value) }} />
              <label className="form-check-label form-check form-check-inline text-white" for="inlineRadio1">Mujer</label>
              <input
                className='form-check-input'
                type="radio" value="Hombre"
                onChange={(e) => { setSexo(e.target.value) }} />
              <label className="form-check-label form-check form-check-inline text-white" for="inlineRadio2">Hombre</label>

            </div>


            <div className="input-group mb-3" >
              <div className='input-group-prepend'>
                <span className="input-group-text"> Correo</span>
              </div>
              <input
                className='form-control'
                placeholder='Introduce tu correo electronico'
                type="email"
                onChange={(e) => { setEmail(e.target.value) }} />
            </div>

            <div className="input-group mb-3">
              <div className='input-group-prepend'>
                <span className="input-group-text">Contraseña</span>
              </div>
              <input
                className='form-control'
                placeholder='Introduce una contraseña'
                type="password"
                onChange={(e) => { setPass(e.target.value) }} />
           
            </div>

            <button onClick={registrarUsuario} className="btn btn-info btn-block mt-4">Registrar Usuario</button>
          </div>
        </form>

      </div>
      <div className='col'></div>

    </div>
  )
}

export default Registro