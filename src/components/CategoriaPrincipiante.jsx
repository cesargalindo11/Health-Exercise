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
                <h1 style={{ color: 'black' }}>
                    Categoria Principiante
                </h1>
            </div>
            <div class="container" style={{ display: "flex", flexWrap: "wrap" }} >
                <div class="card m-2">
                    <img src='./Categorias/PechoPrincipiante.jpg' className='Ejercicios' />
                    <button onClick={()=> setModalIsOpen(true)} type="button" class="btn btn-info btn-block mt-4">Pecho</button>
                </div>
              
                <Modal
                    isOpen={modalIsOpen}
                    style={
                        {
                            overlay: {
                                backgroundColor: '#4ECDC4'
                            },
                            content: {
                                backgroundColor: '#292f36',
                                backgroundImage: 'linear-gradient(160deg, #292f36 0%, #44eecc 100%)',
                                position: 'absolute',
                                top: '0px',
                                left: '0px',
                                right: '0px',
                                bottom: '0px',
                            }
                        }
                    }
                >

                    <div>
                        <Video link={url} />
                    </div>
                    <div>
                        <button onClick={() => setModalIsOpen(false)}  class="btn btn-info mt-4 tamano">Categorias</button>
                    </div>
                </Modal>

                 <div class="card m-2">
                    <img src='./Categorias/EspaldaPrincipiante.png' className='Ejercicios' />
                    <button onClick={() => setModalEspalda(true)} type="button" class="btn btn-info btn-block mt-4">Espalda</button>
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
                    <button type="button" class="btn btn-info btn-block mt-4">Brazo</button>
                </div>
                <div class="card m-2">
                    <img src='./Categorias/PiernaPrincipiante.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">Pierna</button>
                </div>
                <div class="card m-2">
                    <img src='./Categorias/AbdominalPrincipiante.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">Abdominal</button>
                </div>
                <div class="card m-2">
                    <img src='./Categorias/HombroPrincipiante.jpg' className='Ejercicios' />
                    <button type="button" class="btn btn-info btn-block mt-4">Hombro</button>
                </div> 
            </div>
        </div>
    )
}
export default CategoriaPrincipiante;