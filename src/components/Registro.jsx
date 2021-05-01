import React, { useState, useEffect } from 'react';
import '../assets/css/App.css';
import { store } from '../firebaseConfig';
import { toast } from "react-toastify";



const Registro = () => {



  const [currentId, setCurrentId] = useState("");
  
  

  const initialStateValues = {
    Nombres: '',
    Apellidos: '',
    Edad: null,
    Peso: null,
    Email: '',
    Password: '',
  };

  const [values, setValues] = useState(initialStateValues);
  const [sexo,setSexo]=useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
   
    
  };


  const registrarUsuario = async () => {
    try {

      await store.collection("registro").doc().set(values);
      toast("Usuario Registrado", {
        type: "success",
      });

    } catch (error) {
      console.error(error);
    }
  };
  const validNomAp = (str) => {
    var pattern = new RegExp(

      "[A-Za-z0-9]{4,30}"

    );
    return !!pattern.test(str);
  };

  const validEdad = (str) => {
    let pattern = /[10-60]/;

    console.log(pattern);

    return !!pattern.test(str);
  };

  const validPeso = (str) => {
    var pattern = new RegExp(

     "(^[0-9]{1,3}$|^[0-9]{1,3}\.[0-9]{1,3}$)"
    );
    return !!pattern.test(str);
  };

  const validEmail = (str) => {
    var pattern = new RegExp(

      "^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$"

    );
    return !!pattern.test(str);
  };
  const validPass = (str) => {
    var pattern = new RegExp(

      ""
    );
    return !!pattern.test(str);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    //nombres
    if (!validNomAp(values.Nombres)) {
      return toast("Nombre Invalido", { type: "warning", autoClose: 1000 });
    }
    //Apellidos
    if (!validNomAp(values.Apellidos)) {
      return toast("Apellidos Invalido", { type: "warning", autoClose: 1000 });
    }
    //edad
    if (!validEdad(values.Edad)) {
      return toast("Edad Invalido", { type: "warning", autoClose: 1000 });
    }

    //peso
    if (!validPeso(values.Peso)) {
      return toast("Peso Invalido", { type: "warning", autoClose: 1000 });
    }
    //validacion Correo
    if (!validEmail(values.Email)) {
      return toast("Correo Invalido", { type: "warning", autoClose: 1000 });
    }
    ///Contrasenia
    if (!validPass(values.Password)) {
      return toast("Contrasenia Invalido", { type: "warning", autoClose: 1000 });
    }


    registrarUsuario(values);
    setValues({ ...initialStateValues });
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
              minLength="10"
              maxLength="60"
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
              minLength="40"
              maxLength="150"
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
              onChange={ handleInputChange}
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
              name="Email" />
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
              minlength="5" 
              maxLength="30" required
              title="ingrese un minimo de 5 y maximo 30 caracteres"
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