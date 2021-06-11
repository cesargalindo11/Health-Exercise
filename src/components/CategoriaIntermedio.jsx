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
                                //backgroundColor: '#292f36',
                                //backgroundImage: 'linear-gradient(160deg, #292f36 0%, #44eecc 100%)',
                                background: 'rgba(0, 0, 0, .01)',
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
                        <Video link={'https://firebasestorage.googleapis.com/v0/b/saludyejercicio-8966d.appspot.com/o/Proyecto_pecho.mp4?alt=media&token=e9edabbc-9656-41cc-b5f9-ac7ddc4f58c2'} funcion={establecerModal} funcion2={siguienteCategoriaEspalda}/>
                    
                   
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
                                //backgroundColor: '#292f36',
                                //backgroundImage: 'linear-gradient(160deg, #292f36 0%, #44eecc 100%)',
                                background: 'rgba(0, 0, 0, .01)',
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
                        <Video link={'https://firebasestorage.googleapis.com/v0/b/saludyejercicio-8966d.appspot.com/o/Proyecto_espalda.mp4?alt=media&token=1d35c261-371b-4448-a200-8b472748bdce'} funcion={establecerModal} funcion2={siguienteCategoriaBrazo}/>
                    
                   
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
                                //backgroundColor: '#292f36',
                                //backgroundImage: 'linear-gradient(160deg, #292f36 0%, #44eecc 100%)',
                                background: 'rgba(0, 0, 0, .01)',
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
                        <Video link={'https://firebasestorage.googleapis.com/v0/b/saludyejercicio-8966d.appspot.com/o/Proyecto_brazos.mp4?alt=media&token=7cdae677-1265-4b26-98b1-a1fc37951e24'} funcion={establecerModal} funcion2={siguienteCategoriaPierna}/>
                    
                   
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
                                //backgroundColor: '#292f36',
                                //backgroundImage: 'linear-gradient(160deg, #292f36 0%, #44eecc 100%)',
                                background: 'rgba(0, 0, 0, .01)',
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
                        <Video link={'https://firebasestorage.googleapis.com/v0/b/saludyejercicio-8966d.appspot.com/o/Proyecto_piernas.mp4?alt=media&token=abed8a31-c6a7-479c-b3dc-06c559fe1b30'} funcion={establecerModal} funcion2={siguienteCategoriaAbdomen}/>
                    
                   
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
                                //backgroundColor: '#292f36',
                                //backgroundImage: 'linear-gradient(160deg, #292f36 0%, #44eecc 100%)',
                                background: 'rgba(0, 0, 0, .01)',
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
                        <Video link={'https://firebasestorage.googleapis.com/v0/b/saludyejercicio-8966d.appspot.com/o/Proyecto_abdomen.mp4?alt=media&token=44870db4-adc8-4255-9c55-b913de024806'} funcion={establecerModal} funcion2={siguienteCategoriaHombro} />
                    
                   
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
                                //backgroundColor: '#292f36',
                                //backgroundImage: 'linear-gradient(160deg, #292f36 0%, #44eecc 100%)',
                                background: 'rgba(0, 0, 0, .01)',
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
                        <Video link={'https://firebasestorage.googleapis.com/v0/b/saludyejercicio-8966d.appspot.com/o/Proyecto_hombros.mp4?alt=media&token=96f672e1-af9d-42d9-8901-8935bef7d6f6'} funcion={establecerModal} funcion3={mandarANiveles}esUltimo={true} />
                    
                   
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