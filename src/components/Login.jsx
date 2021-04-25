import React, { useState } from 'react'
import '../assets/css/App.css'


function Login() {
    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        alert("${correo},${password}");
    }

    return (
        <div className=' row mt-15'>

            <div className='col'></div>
            <div className='col bg-t'>

                <form className='form-group'>


                    <div className="input-group mb-3">
                        <div className='input-group-prepend'>
                            <span className="input-group-text"> Correo</span>
                        </div>
                        <input
                            className='form-control'
                            placeholder='Introduce tu correo electronico'
                            type="email" />
                    </div>

                    <div className="input-group mb-3">
                        <div className='input-group-prepend'>
                            <span className="input-group-text">Contraseña</span>
                        </div>
                        <input
                            className='form-control'
                            placeholder='Introduce una contraseña'
                            type="password" />
                    </div>

                    <input
                        className='btn btn-info btn-block mt-4'
                        value='Iniciar Sesion'
                        type="submit" />

                </form>

            </div>
            <div className='col'></div>

        </div>
    );
}



export default Login