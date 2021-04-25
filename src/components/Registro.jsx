import React from 'react';

const Registro = () => {
  return(
    <div className='row mt-5'>

      <div className='col'></div>
      <div className='col'>

        <form className='form-group'> 
          <div className="input-group mb-3">
            <div className='input-group-prepend'>
              <span className="input-group-text">Nombres</span>
            </div>
            <input 
            className='form-control'
            placeholder='Introduce tu nombre'
            type="text"/>
          </div>

          <div className="input-group mb-3">
            <div className='input-group-prepend'>
              <span className="input-group-text">Apellidos</span>
            </div>
            <input 
            className='form-control'
            placeholder='Introduce tu apellido'
            type="text"/>
          </div>


          <div className="input-group mb-3">
            <div className='input-group-prepend'>
              <span className="input-group-text">Datos</span>
            </div>
            <input 
            className='form-control'
            placeholder='Edad'
            type="number"/>
            <input 
            className='form-control'
            placeholder='Peso'
            type="number"/>

          </div>

          <div className="form-check form-check-inline mb-3">
            <div className='input-group-prepend'>
              <span className="input-group-text ">Sexo</span>
            </div>
            <input 
            className='form-check-input'
            type="radio"/>
            <label className="form-check-label form-check form-check-inline" for="inlineRadio1">Mujer</label>
            <input 
            className='form-check-input'
            type="radio"/>
            <label className="form-check-label form-check form-check-inline" for="inlineRadio2">Hombre</label>

          </div>

          <div className="input-group mb-3">
            <div className='input-group-prepend'>
              <span className="input-group-text"> Correo</span>
            </div>
            <input 
            className='form-control'
            placeholder='Introduce tu correo electronico'
            type="email"/>
          </div>

          <div className="input-group mb-3">
            <div className='input-group-prepend'>
              <span className="input-group-text">Contraseña</span>
            </div>
            <input 
            className='form-control'
            placeholder='Introduce una contraseña'
            type="password"/>
          </div>

          <input
            className='btn btn-info btn-block mt-4'
            value='Registrar Usuario'
            type="submit"/>

        </form>

      </div>
      <div className='col'></div>
      
    </div>
  )
}

export default Registro