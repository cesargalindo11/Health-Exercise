import React, { useEffect, useState } from 'react';
import '../assets/css/App.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebaseConfig';

const CategoriaAvanzado = () => {
    return (
        <div>
            <div class="container BotonesNivel" >
               
            </div>
            <div className="Categoria" class="container">
                <h1 style={{ color: 'white'}}>
                    Categoria Avanzado
                </h1>
            </div>
            <div class="container" style={{ display: "flex", flexWrap: "wrap" }}>
                <div class="card m-2">
                    <img src='./Categorias/PechoAvanzado.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">Pecho</button>
                </div>
                <div class="card m-2">
                    <img src='./Categorias/EspaldaAvanzado.jpeg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">Espalda</button>
                </div>
                <div class="card m-2">
                    <img src='./Categorias/BrazoAvanzado.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">Brazo</button>
                </div>
                <div class="card m-2">
                    <img src='./Categorias/PiernaAvanzado.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">Pierna</button>
                </div>
                <div class="card m-2">
                    <img src='./Categorias/AbdominalAvanzado.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">Abdominal</button>
                </div>
                <div class="card m-2">
                    <img src='./Categorias/HombroAvanzado.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">Hombro</button>
                </div>
            </div>
        </div>
    )
}
export default CategoriaAvanzado;