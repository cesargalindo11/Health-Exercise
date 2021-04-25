import React, { useState } from 'react'
import '../assets/css/App.css';


function Login() {
    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        alert("${correo},${password}");
    }
  
    return (
        <section className="contenedor">
            <div className="contenedor sesion">
                <h2 className="titulo">INICIAR SESION</h2>
                <div className="contenido-form">
                    <form className="sesion" onSubmit={handleSubmit}>
                        <input type='email' placeholder='Correo' onChange={(e) => setCorreo(e.target.value)} />
                        <input type='password' placeholder='Contrasenia' onChange={(e) => setPassword(e.target.value)} />
                        <button className="boton">Iniciar Sesion</button>
                    </form>
                </div>
            </div>

        </section>
    );
}



export default Login