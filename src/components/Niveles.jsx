import React, { useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
const Niveles = () => {

  const CerrarSesion = () => {

    auth.signOut()
    setUsuario(null)
    historial.push('/')

  }

  return(
    <div>
      <h1>Niveles</h1>
      {
          usuario
          ? ( <button
              onClick={CerrarSesion}
              className='btn btn-danger'>
              Cerrar sesion
              </button> )
          : ( <span></span> )
        }
    </div>
  )
}

export default Niveles;