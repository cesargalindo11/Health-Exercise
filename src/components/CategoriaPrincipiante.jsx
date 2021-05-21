import React, { useEffect, useState } from 'react';
import '../assets/css/App.css';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import Modal from 'react-modal'
import Video from '../Video'
const CategoriaPrincipiante = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalEspalda, setModalEspalda] = useState(false);
    const url='https://firebasestorage.googleapis.com/v0/b/saludyejercicio-8966d.appspot.com/o/fitnes.mp4?alt=media&token=83e7c600-5031-48f4-9687-5444a8d00a5f';
 
    return (
        <div>
            <div class="container BotonesNivel" >
                
            </div>
            <div className="Categoria" class="container">
                <h2>
                    Categoria Principiante
                </h2>
            </div>
            <div class="container backgroud-card" style={{ display: "flex", flexWrap: "wrap" }} >
                <div class="card m-2">
                    <img src='./Categorias/PechoPrincipiante.jpg' className='Ejercicios' />
                    <button onClick={()=> setModalIsOpen(true)} type="button" class="btn btn-info btn-block mt-4 tamanioletra">{<h2>Pecho</h2>}</button>
                </div>
              
                <Modal
                    isOpen={modalIsOpen}
                    
                    style={
                        {
                            overlay: {
                                backgroundColor: '#292F36'
                            },
                            content: {
                                backgroundColor: '#292f36',
                                backgroundImage: 'linear-gradient(160deg, #292f36 0%, #44eecc 100%)',
                                position: 'absolute',
                                top: '20px',
                                left: '20px',
                                right: '20px',
                                bottom: '20px',
                            }
                        }
                    }
                >
                        
                    <div>
                    <h2>Categoria Pecho</h2>
                        <Video link={url} />
                    </div>
                    <div>
                        <button onClick={() => setModalIsOpen(false)}  class="btn btn-info mt-4 tamano">{<h2>Categoria</h2>}</button>
                    </div>
                </Modal>

                 <div class="card m-2">
                    <img src='./Categorias/EspaldaPrincipiante.png' className='Ejercicios' />
                    <button onClick={() => setModalEspalda(true)} type="button" class="btn btn-info btn-block mt-4">{<h2>Espalda</h2>}</button>
                </div>
                <Modal isOpen={modalEspalda}>
                    <h2></h2>
                    <div>
                        <button onClick={() => setModalEspalda(false)}>Categorias</button>
                    </div>
                    <div>
                        <button onClick={() => setModalIsOpen(true)}>Espalda</button>
                    </div>
                </Modal> 

                <div class="card m-2">
                    <img src='./Categorias/BrazoPrincipiante.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">{<h2>Brazo</h2>}</button>
                </div>
                <div class="card m-2">
                    <img src='./Categorias/PiernaPrincipiante.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">{<h2>Pierna</h2>}</button>
                </div>
                <div class="card m-2">
                    <img src='./Categorias/AbdominalPrincipiante.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">{<h2>Abdominal</h2>}</button>
                </div>
                <div class="card m-2">
                    <img src='./Categorias/HombroPrincipiante.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">{<h2>Hombro</h2>}</button>
                </div> 
            </div>
        </div>
    )
}
export default CategoriaPrincipiante;