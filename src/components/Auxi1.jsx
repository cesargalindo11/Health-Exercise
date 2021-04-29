import React, { useState,useEffect } from 'react';
import '../assets/css/App.css';
import {store } from '../firebaseConfig';
import {toast}   from "react-toastify";
//import 'firebase/auth';

//import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

const Registro = () => {
  const [links, setLinks] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const initialStateValues = {
    Nombres: '',
    Apellidos: '',
    Edad: '',
    Peso: '',
    Sexo:'',
    Email: '',
    Password: '',
  };

  const [values, setValues] = useState(initialStateValues);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validEmail = (str) => {
    var pattern = new RegExp(

      "/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/"
    
    ); // fragment locator
    return !!pattern.test(str);
  };

  const addOrEditLink = async () => {
    try {
      if (currentId === "") {
        await store.collection("registro").doc().set(values);
        toast("New Link Added", {
          type: "success",
        });
      } else {
        await store.collection("links").doc(currentId).update(values);
        /*toast("Link Updated Successfully", {
          type: "info",
        });*/
        setCurrentId("");
      }
    } catch (error) {
      console.error(error);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validEmail(values.Email)) {
      return toast("Correo Invalido", { type: "warning", autoClose: 1000 });
    }

    addOrEditLink(values);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentId]);





  return (
    <div className='row mt-5'>

      <div className='col'></div>
      <div className='col bg-registro'>

        <form className='form-group' onSubmit={handleSubmit}>

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
              pattern="[A-Za-z]{3,30}"
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
              pattern="[A-Za-z]{3,30}"
              title="Letras. Tamaño mínimo: 3. Tamaño máximo: 30"
              />
          </div>


          <div className="input-group mb-3">
            <div className='input-group-prepend'>
              <span className="input-group-text">Datos</span>
            </div>
            <input
              className='form-control'
              placeholder='Edad'
              type="number"
              onChange={handleInputChange} 
              value={values.Edad}
              name="Edad"
             />
            <input
              className='form-control'
              placeholder='Peso'
              type="number"
              onChange={handleInputChange} 
              value={values.Peso}
              name="Peso" />

          </div>

          <div className="form-check form-check-inline mb-3">
            <div className='input-group-prepend '>
              <span className="input-group-text mg-r">Sexo</span>
            </div>
            <input
              className='form-check-input'
              type="radio" 
              required
              onChange={ handleInputChange}
              name="Hombre" 
             
              required name="driver" id="r1" 
              value="Mujer"
              value={values.Sexo}
              />
            <label className="form-check-label form-check form-check-inline text-white" for="inlineRadio1">Mujer</label>
            <input
              className='form-check-input'
              type="radio"
              onChange={handleInputChange}
              name="Mujer" 
              value={values.Sexo}
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
              name="Email"/>
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
              minlength="5" required
              maxLength="30" required
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