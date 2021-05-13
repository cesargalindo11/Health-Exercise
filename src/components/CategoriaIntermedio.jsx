import React, { useEffect, useState } from 'react';
import '../assets/css/App.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebaseConfig';

const CategoriaIntermedio = () => {
    return (
        <div>
            <div class="container BotonesNivel p-3 my-3 border" >
                <button
                    className='barra btn btn-danger '>
                    Atras
                </button>
            </div>
            <div className="Categoria" class="container p-3 my-3 border">
                <h1 style={{ color: 'white' }}>
                    Categoria Intermedio
                </h1>
            </div>
            <div class="container p-3 my-3 border" style={{ display: "flex", flexWrap: "wrap" }}>
                <div class="card m-2">
                    <img src='./Categorias/PechoIntermedio.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">Pecho</button>
                </div>
                <div class="card m-2">
                    <img src='./Categorias/EspaldaIntermedio.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">Espalda</button>
                </div>
                <div class="card m-2">
                    <img src='./Categorias/BrazoIntermedio.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">Brazo</button>
                </div>
                <div class="card m-2">
                    <img src='./Categorias/PiernaIntermedio.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">Pierna</button>
                </div>
                <div class="card m-2">
                    <img src='./Categorias/AbdominalIntermedio.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">Abdominal</button>
                </div>
                <div class="card m-2">
                    <img src='./Categorias/HombroIntermedio.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">Hombro</button>
                </div>
            </div>
        </div>
    )
}
export default CategoriaIntermedio;