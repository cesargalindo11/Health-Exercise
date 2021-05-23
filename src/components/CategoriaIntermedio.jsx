import React, { useEffect, useState } from 'react';
import '../assets/css/App.css';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { auth } from '../firebaseConfig';




const CategoriaIntermedio = (props) => {

    const { history } = props;
    
    return (
        <div>
            <div class="container BotonesNivel" >
                
            </div>
            <div className="Categoria" class="container">
                <h2>
                    Categoria Intermedio
                </h2>
            </div>
            <div class="container" style={{ display: "flex", flexWrap: "wrap" }}>
                <div class="card m-2">
                    <img src='./Categorias/PechoIntermedio.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">{<h2>Pecho</h2>}</button>
                </div>
                <div class="card m-2">
                    <img src='./Categorias/EspaldaIntermedio.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">{<h2>Espalda</h2>}</button>
                </div>
                <div class="card m-2">
                    <img src='./Categorias/BrazoIntermedio.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">{<h2>Brazo</h2>}</button>
                </div>
                <div class="card m-2">
                    <img src='./Categorias/PiernaIntermedio.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">{<h2>Pierna</h2>}</button>
                </div>
                <div class="card m-2">
                    <img src='./Categorias/AbdominalIntermedio.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">{<h2>Abdominal</h2>}</button>
                </div>
                <div class="card m-2">
                    <img src='./Categorias/HombroIntermedio.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">{<h2>Hombro</h2>}</button>
                </div>

                <div>
                    <button onClick={() => history.push('/niveles') } type="button" class="btn btn-info btn-block mt-4">Ir a Niveles</button>
                </div>
            </div>
        </div>
    )
}
export default withRouter(CategoriaIntermedio);