import React, { useState,useEffect } from 'react';
import '../assets/css/App.css';
import { useHistory } from 'react-router-dom';
import { store } from '../firebaseConfig';
//import { toast } from "react-toastify";
//import Nivel from './Niveles';

import '../App'
const Login = () =>{

    const historial = useHistory()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [msgerror, setMsgError] = useState(null)
    //const [links, setLinks] = useState([]);
    const [values, setValues] = useState('');
    const docs = [];
    const Correo=[];
    const Contra=[];
 
    console.log(Correo);
    
    const handleInputChange = (e) => {
      e.preventDefault()
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
      setEmail(values.correo) ;
      setPass(values.password) ;

    };
    
const LoginUsuario = () => {
  //e.preventDefault()
  try{
    let i = 0;
    let aux='';
    console.log(email);
    do{
     
      
        aux=docs[i];
        //if(aux.Email===email && aux.Password===pass)
       // console.log(pass);
          console.log(aux.Nombres);
          //historial.push('/')
      i++;
    }while(i<=docs.length-1);
  }catch{

  }
  

}



  const getUsuario = async () => {
    store.collection("registro").onSnapshot((querySnapshot) => {
      //const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      //console.log(docs);
      
      //setLinks(docs);
      
      LoginUsuario(docs);
    });
  };

  useEffect(() => {

    getUsuario();
  }, []);



      
    return (
        <div className=' row mt-15'>

            <div className='col'></div>
            <div className='col bg-t'>

                <form  className='form-group'>


                    <div className="input-group mb-3">
                        <div className='input-group-prepend'>
                            <span className="input-group-text"> Correo</span>
                        </div>
                        <input
                            className='form-control'
                            placeholder='Introduce tu correo electronico'
                            type="email"
                            name="correo"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="input-group mb-3">
                        <div className='input-group-prepend'>
                            <span className="input-group-text">Contraseña</span>
                        </div>
                        <input
                            className='form-control'
                            placeholder='Introduce una contraseña'
                            type="password"
                            name="password"
                            onChange={handleInputChange}
                        />
                    </div>

                    <button 
                   onClick={LoginUsuario}
                    className="btn btn-info btn-block mt-4">
                        Iniciar Sesion
                   </button>

                </form>

                {
          msgerror != null
          ? (
            <div>
              
              {msgerror}
            </div>
          )
          : (
            <span></span>
          )
        }
            </div>
            <div className='col'></div>

        </div>
    );
}


export default Login

   /* const LoginUsuario = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, pass)

        .then( (userCredential) => {
          var user = userCredential.user;
          historial.push('/Nivel')
          
         
        })
        .catch( (err) => {
          return toast("Correo y/o Contraseña Incrorrecta", { type: "warning", autoClose: 1000 });
        })
      }*/
     

