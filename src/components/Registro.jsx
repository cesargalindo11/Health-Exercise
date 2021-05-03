import React, { useState, useEffect } from 'react';
import '../assets/css/App.css';
import { store, auth } from '../firebaseConfig';
import { toast } from "react-toastify";



const Registro = () => {


  const [currentId, setCurrentId] = useState("");
  const [correo, setCorreo] = useState("");
  const [contra, setContra] = useState("");
  


  const initialStateValues = {
    Nombres: '',
    Apellidos: '',
    Edad: '',
    Peso: '',
    Email: '',
    Password: '',
  };


  const [values, setValues] = useState(initialStateValues);
  const [sexo, setSexo] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setCorreo(values.Email);
    setContra(values.Password);
    //LoginUsuario()

  };

  const registrarUsuario = async () => {

    try {

      await store.collection("registro").doc().set(values);
      toast("Te Registraste con Exito", {
        type: "success",

      });

    } catch (error) {
      console.error(error);
    }
    
  };

 const LoginUsuario = () => {

  if(values.Email!='' && values.Password!=''){
    auth.createUserWithEmailAndPassword(correo, contra)
      .then((userCredential) => console.log('Usuario Registrado'))
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;       

      });
    }
  }

  const validNomAp = (str) => {

    let pattern = /^(?=.{3,30}$)[a-z]+(?:\s+[a-z]+)*$/i

    return !!pattern.test(str);
  };

  const validEdad = (str) => {

    let pattern = /[1-5][1-9]/;

    return !!pattern.test(str);

  };

  const validPeso = (str) => {
    let pattern = /^([4-8][0-9]|[0-1][0-5][0-0])$/;
    return !!pattern.test(str);

  };

  const validEmail = (str) => {
    let pattern = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;


    return !!pattern.test(str);
  };
  const validPass = (str) => {
    let pattern = /^[A-Za-z0-9]{5,30}/

    return !!pattern.test(str);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      //nombres
      if (!validNomAp(values.Nombres)) {
        return toast("Nombre no Valido", { type: "warning", autoClose: 1000 });
      }
      //Apellidos
      if (!validNomAp(values.Apellidos)) {
        return toast("Apellidos no Valido", { type: "warning", autoClose: 1000 });
      }
      //edad
      if (!validEdad(values.Edad)) {
        return toast("Edad no Valido", { type: "warning", autoClose: 1000 });
      }

      //peso
      if (!validPeso(values.Peso)) {
        return toast("Peso no Valido", { type: "warning", autoClose: 1000 });
      }
      //validacion Correo
      if (!validEmail(values.Email)) {
        return toast("Correo no Valido", { type: "warning", autoClose: 1000 });
      }
      ///Contrasenia
      if (!validPass(values.Password)) {
        return toast("Contrasena no Valida", { type: "warning", autoClose: 1000 });
      }
      //console.log(ban)
     // if(ban==true){
        
        registrarUsuario(values);
        setValues({ ...initialStateValues });
      
     // }else{      
       //  return toast("Registro incorrecto. correo ya existe", { type: "warning", autoClose: 1000 });
      //}
      
      //registrarUsuario(values);
      //setValues({ ...initialStateValues });
 

  };

  const getLinkById = async (id) => {
    const doc = await store.collection("registro").doc(id).get();
    setValues({ ...doc.data() });
  };

  useEffect(() => {
    if (currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      getLinkById(currentId);
    }

  }, [currentId]);





  return (
    <div className='row mt-5'>

      <div className='col'></div>
      <div className='col bg-registro'>

        <form className='form-group' id="formulario" onSubmit={handleSubmit}>

          <div className="input-group mb-3">
            <div className='input-group-prepend'>
              <span className="input-group-text">Nombres</span>
            </div>
            <input
              className='form-control'
              placeholder='Introduce tu nombre'
              type="text"
              onChange={handleInputChange}
              value={values.Nombres}
              name="Nombres"
              required
              //pattern="[A-Za-z]{3,30}"
              title="Letras. Tamaño mínimo: 3. Tamaño máximo: 30"

            />
          </div>

          <div className="input-group mb-3">
            <div className='input-group-prepend'>
              <span className="input-group-text">Apellidos</span>
            </div>
            <input
              className='form-control'
              placeholder='Introduce tu apellido'
              type="text"
              onChange={handleInputChange}
              value={values.Apellidos}
              name="Apellidos"
              required
              //pattern="[A-Za-z]{3,30}"
              title="Letras. Tamaño mínimo: 3. Tamaño máximo: 30"
            />
          </div>


          <div className="input-group mb-3">
            <div className='input-group-prepend'>
              <span className="input-group-text">Edad</span>
            </div>
            <input
              className='form-control'
              placeholder='Introduce tu Edad'
              type="number"
              onChange={handleInputChange}
              value={values.Edad}
              name="Edad"
              //minLength="10"
              //maxLength="60"
              required

            />

            <div className='input-group-prepend'>
              <span className="input-group-text">Peso</span>
            </div>
            <input
              className='form-control'
              placeholder='Introduce tu Peso'
              type="number"
              onChange={handleInputChange}
              value={values.Peso}
              name="Peso"
              //minLength="40"
              //maxLength="150"
              required
            />
          </div>

          <div className="form-check form-check-inline mb-3">
            <div className='input-group-prepend '>
              <span className="input-group-text mg-r">Sexo</span>
            </div>
            <input
              className='form-check-input'
              type="radio"
              onChange={handleInputChange}
              name="Sexo"
              value='mujer'
              required

            />
            <label className="form-check-label form-check form-check-inline text-white" for="inlineRadio1">Mujer</label>

            <input
              className='form-check-input'
              type="radio"
              onChange={handleInputChange}
              name="Sexo"
              value='hombre'
              required
            />
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
              onChange={handleInputChange}
              value={values.Email}
              name="Email" 
              required/>
          </div>

          <div className="input-group mb-3">
            <div className='input-group-prepend'>
              <span className="input-group-text">Contraseña</span>
            </div>
            <input
              className='form-control'
              placeholder='Introduce una contraseña'
              type="password"
              onChange={handleInputChange}
              value={values.Password}
              name="Password"
              //minlength="5"
              //maxLength="30" 
              //pattern="[A-Za-z0-9]+"
              title="ingrese de 5 a 30 caracteres alfanumericos"
              required
            />

          </div>

          <input
            className='btn btn-info btn-block mt-4'
            value='Registrar Usuario'
            type="submit" />
        </form>

      </div>
      <div className='col'></div>

    </div>
  )
}

export default Registro
