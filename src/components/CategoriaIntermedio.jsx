import React, { useEffect, useState } from 'react';
import '../assets/css/App.css';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import Modal from 'react-modal'
import Video from '../Video'
const CategoriaIntermedio = (props) => {
    const historial=useHistory();
    const [modalIsPecho, setModalIsPecho] = useState(false);
    const [modalEspalda, setModalEspalda] = useState(false);
    const [modalBrazo, setModalBrazo] = useState(false);
    const [modalPierna, setModalPierna] = useState(false);
    const [modalAbdomen, setModalAbdomen] = useState(false);
    const [modalHombro, setModalHombro] = useState(false);
    const url='https://firebasestorage.googleapis.com/v0/b/saludyejercicio-8966d.appspot.com/o/pecho_HD_720p%5B1%5D.mp4?alt=media&token=721498a9-ef5c-4a2b-8f3b-e0d2906e3154';

    
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
                        <Video link={'https://firebasestorage.googleapis.com/v0/b/saludyejercicio-8966d.appspot.com/o/intermedio_pecho.mp4?alt=media&token=942828c2-813f-4cab-893a-b5764984eba4'} funcion={establecerModal} funcion2={siguienteCategoriaEspalda}/>
                    
                   
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
                        <Video link={'https://firebasestorage.googleapis.com/v0/b/saludyejercicio-8966d.appspot.com/o/intermedio_espalda.mp4?alt=media&token=e4acb2e6-a72f-41a7-8d0f-4f836655a408'} funcion={establecerModal} funcion2={siguienteCategoriaBrazo}/>
                    
                   
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
                        <Video link={'https://firebasestorage.googleapis.com/v0/b/saludyejercicio-8966d.appspot.com/o/intermedio_brazos.mp4?alt=media&token=774e1089-a773-45f9-9db2-5f2c1c6e907e'} funcion={establecerModal} funcion2={siguienteCategoriaPierna}/>
                    
                   
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
                        <Video link={url} funcion={establecerModal} funcion2={siguienteCategoriaAbdomen}/>
                    
                   
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
                        <Video link={url} funcion={establecerModal} funcion2={siguienteCategoriaHombro} />
                    
                   
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
                        <Video link={url} funcion={establecerModal} funcion3={mandarANiveles}esUltimo={true} />
                    
                   
                    </div>
                  
                </Modal>


                <div>
                    <button onClick={() => history.push('/niveles') } type="button" class="btn btn-info btn-block mt-4">Ir a Niveles</button>
                </div>
            </div>
        </div>
    )
}
export default withRouter(CategoriaIntermedio);