import React, { useEffect, useState } from 'react';
import '../assets/css/App.css';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import Modal from 'react-modal'
import Video from '../Video'
const CategoriaPrincipiante = (props) => {
    const historial=useHistory();
    const [modalIsPecho, setModalIsPecho] = useState(false);
    const [modalEspalda, setModalEspalda] = useState(false);
    const [modalBrazo, setModalBrazo] = useState(false);
    const [modalPierna, setModalPierna] = useState(false);
    const [modalAbdomen, setModalAbdomen] = useState(false);
    const [modalHombro, setModalHombro] = useState(false);
    const url='https://firebasestorage.googleapis.com/v0/b/saludyejercicio-8966d.appspot.com/o/brazoscorregido_SD%20360p.mp4?alt=media&token=ca8c0150-4479-4777-862d-1ce33c06b74d';

    
    const { history } = props;
    const establecerModal=()=>{
          setModalIsPecho(false);
          setModalEspalda(false);
          setModalBrazo(false);
          setModalPierna(false);
          setModalAbdomen(false);
          setModalHombro(false);

    }
 
    const siguienteCategoriaEspalda = () =>{
        setModalIsPecho(false);
        setModalEspalda(true);   
    }
    const siguienteCategoriaBrazo = () =>{
        setModalEspalda(false);
        setModalBrazo(true);  
    }
    const siguienteCategoriaPierna = () =>{
        setModalBrazo(false);
        setModalPierna(true);  
    }
    const siguienteCategoriaAbdomen = () =>{
        setModalPierna(false);
        setModalAbdomen(true);  
    }
    const siguienteCategoriaHombro = () =>{
        setModalAbdomen(false);
        setModalHombro(true); 
    }
    const mandarANiveles=()=>{
        historial.push('/niveles')
    }
 

    return (
        <div>
            <div class="container BotonesNivel" >
                
            </div>
            <div className="container Categoria" class="container">
                <h2>
                    Categoria Intermedio
                </h2>
            </div>
            <div class="container backgroud-card" style={{ display: "flex", flexWrap: "wrap" }} >



                <div class="card m-2">
                    <img src='./Categorias/pecho.jpg' className='Ejercicios' />
                    <button onClick={()=> setModalIsPecho(true)} type="button" class="btn btn-info btn-block mt-4 tamanioletra">{<h2>Pecho</h2>}</button>
                </div>
              
                <Modal
                    isOpen={modalIsPecho}
                    
                    style={
                        {
                            overlay: {
                                backgroundColor: '#292F36'
                            },
                            content: {
                                backgroundImage: 'url(./Categorias/man-2264825_1920.jpg)',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '100%',
                                position: 'absolute',
                                top: '20px',
                                left: '20px',
                                right: '20px',
                                bottom: '20px',
                            }
                        }
                    }
                >
                        
                    <div className="container">
                    <h3>Categoria Pecho</h3>
                        <Video link={'https://firebasestorage.googleapis.com/v0/b/saludyejercicio-8966d.appspot.com/o/intermedio_pecho.mp4?alt=media&token=414d3a25-a6c9-452e-84a3-82eba89eea3f'} funcion={establecerModal} funcion2={siguienteCategoriaEspalda}/>
                    
                   
                    </div>
                  
                </Modal>




                 <div class="card m-2">
                    <img src='./Categorias/espalda.jpg' className='Ejercicios' />
                    <button onClick={() => setModalEspalda(true)} type="button" class="btn btn-info btn-block mt-4">{<h2>Espalda</h2>}</button>
                </div>
                <Modal
                    isOpen={modalEspalda}
                    
                    style={
                        {
                            overlay: {
                                backgroundColor: '#292F36'
                            },
                            content: {
                                backgroundImage: 'url(./Categorias/man-2264825_1920.jpg)',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '100%',
                                position: 'absolute',
                                top: '20px',
                                left: '20px',
                                right: '20px',
                                bottom: '20px',
                            }
                        }
                    }
                >
                        
                    <div className="container">
                    <h3>Categoria Espalda</h3>
                        <Video link={'https://firebasestorage.googleapis.com/v0/b/saludyejercicio-8966d.appspot.com/o/intermedio_espalda.mp4?alt=media&token=47b54a43-b51b-4530-a55f-023365552121'} funcion={establecerModal} funcion2={siguienteCategoriaBrazo}/>
                    
                   
                    </div>
                  
                </Modal>





                <div class="card m-2">
                    <img src='./Categorias/brazos.jpg' className='Ejercicios' />
                    <button onClick={() => setModalBrazo(true)}type="button" class="btn btn-info btn-block mt-4">{<h2>Brazo</h2>}</button>
                </div>
                <Modal
                    isOpen={modalBrazo}
                    
                    style={
                        {
                            overlay: {
                                backgroundColor: '#292F36'
                            },
                            content: {
                                backgroundImage: 'url(./Categorias/man-2264825_1920.jpg)',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '100%',
                                position: 'absolute',
                                top: '20px',
                                left: '20px',
                                right: '20px',
                                bottom: '20px',
                            }
                        }
                    }
                >
                        
                    <div className="container">
                    <h3>Categoria Brazo</h3>
                        <Video link={'https://firebasestorage.googleapis.com/v0/b/saludyejercicio-8966d.appspot.com/o/intermedio_brazos.mp4?alt=media&token=8dfcab94-8c75-41b7-842d-46279ea50ff0'} funcion={establecerModal} funcion2={siguienteCategoriaPierna}/>
                    
                   
                    </div>
                  
                </Modal>



                <div class="card m-2">
                    <img src='./Categorias/piernas.jpg' className='Ejercicios' />
                    <button onClick={() => setModalPierna(true)}type="button" class="btn btn-info btn-block mt-4">{<h2>Pierna</h2>}</button>
                </div>
                <Modal
                    isOpen={modalPierna}
                    
                    style={
                        {
                            overlay: {
                                backgroundColor: '#292F36'
                            },
                            content: {
                                backgroundImage: 'url(./Categorias/man-2264825_1920.jpg)',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '100%',
                                position: 'absolute',
                                top: '20px',
                                left: '20px',
                                right: '20px',
                                bottom: '20px',
                            }
                        }
                    }
                >
                        
                    <div className="container">
                    <h3>Categoria Pierna</h3>
                        <Video link={'https://firebasestorage.googleapis.com/v0/b/saludyejercicio-8966d.appspot.com/o/intermedio_piernas.mp4?alt=media&token=4e0a730d-c169-4375-a36b-2ee2af81842e'} funcion={establecerModal} funcion2={siguienteCategoriaAbdomen}/>
                    
                   
                    </div>
                  
                </Modal>



                <div class="card m-2">
                    <img src='./Categorias/abdomen.jpg' className='Ejercicios' />
                    <button onClick={() => setModalAbdomen(true)}type="button" class="btn btn-info btn-block mt-4">{<h2>Abdominal</h2>}</button>
                </div>
                <Modal
                    isOpen={modalAbdomen}
                    
                    style={
                        {
                            overlay: {
                                backgroundColor: '#292F36'
                            },
                            content: {
                                backgroundImage: 'url(./Categorias/man-2264825_1920.jpg)',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '100%',
                                position: 'absolute',
                                top: '20px',
                                left: '20px',
                                right: '20px',
                                bottom: '20px',
                            }
                        }
                    }
                >
                        
                    <div className="container">
                    <h3>Categoria Abdomen</h3>
                        <Video link={'https://firebasestorage.googleapis.com/v0/b/saludyejercicio-8966d.appspot.com/o/intermedio_abdomen.mp4?alt=media&token=3d6eb2e1-4706-4775-bd01-632e67e93107'} funcion={establecerModal} funcion2={siguienteCategoriaHombro} />
                    
                   
                    </div>
                  
                </Modal>



                <div class="card m-2">
                    <img src='./Categorias/hombros.jpg' className='Ejercicios' />
                    <button onClick={() => setModalHombro(true)}type="button" class="btn btn-info btn-block mt-4">{<h2>Hombro</h2>}</button>
                </div> 
                <Modal
                    isOpen={modalHombro}
                    
                    style={
                        {
                            overlay: {
                                backgroundColor: '#292F36'
                            },
                            content: {
                                backgroundImage: 'url(./Categorias/man-2264825_1920.jpg)',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '100%',
                                position: 'absolute',
                                top: '20px',
                                left: '20px',
                                right: '20px',
                                bottom: '20px',
                            }
                        }
                    }
                >
                        
                    <div className="container">
                    <h3>Categoria Hombro</h3>
                        <Video link={'https://firebasestorage.googleapis.com/v0/b/saludyejercicio-8966d.appspot.com/o/intermedio_hombros.mp4?alt=media&token=20715cd5-8360-4438-97f4-80b89a34d688'} funcion={establecerModal} funcion3={mandarANiveles}esUltimo={true} />
                    
                   
                    </div>
                  
                </Modal>


                <div>
                    <button onClick={() => history.push('/niveles') } type="button" class="btn btn-info btn-block mt-4">Ir a Niveles</button>
                </div>
            </div>
        </div>
    )
}
export default withRouter(CategoriaPrincipiante);
