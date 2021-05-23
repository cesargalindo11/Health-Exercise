import React, { useState, useEffect } from 'react';
import '../assets/css/App.css';
import { auth,store} from '../firebaseConfig';
import { toast } from "react-toastify";
import { Link, useHistory } from 'react-router-dom'



const Registro = () => {


  const [currentId, setCurrentId] = useState("");
  const historial = useHistory()

  


  const initialStateValues = {
    Nombres: '',
    Apellidos: '',
    Edad: '',
    Peso: '',
    Email: '',
    Password: '',
  };


  const [values, setValues] = useState(initialStateValues);
  const [error, setError]=useState('');
  const[esta,setEsta]=useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

  };

  const registrar= () => {

    
    //const res=await auth.createUserWithEmailAndPassword(values.Email, values.Password)
    store.collection("registro").where("Email", "==", values.Email)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            setEsta(doc.id)
            //console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
        //return toast("Este Correo ya existe", { type: "warning", autoClose: 1000 });
        //setEsta(true)
        
        //return false;
    });


  }
            
      

  const registrarUsuario =async()=>{

    
    console.log(esta);
    const res= auth.createUserWithEmailAndPassword(values.Email, values.Password)

    if(esta){
      store.collection("registro").doc(res.user.uid).set(values);
        toast("Te Registraste con Exito", {
          type: "success",
          
        });
        historial.push('/login')
        setValues({ ...initialStateValues });
    }
    
  }

/*

   var user=auth.currentUser;
   if(user != null){
     user.providerData.forEach( function(profile){
       console.log(profile.email);
       if(profile.email===values.Email){
        return toast("El usuario ya existe", { type: "warning", autoClose: 1000 });
       }else{
        const res= auth.createUserWithEmailAndPassword(values.Email, values.Password)
        store.collection("registro").doc(res.user.uid).set(values);
            toast("Te Registraste con Exito", {
              type: "success",
              
            });
            historial.push('/login')
       }
     })
*/

   

        
      
   
  
    /*
     const res= await  auth.createUserWithEmailAndPassword(values.Email, values.Password)
     
     store.collection("registro").doc(values.Email).get()

      .then(function(snapshot) {
          if(snapshot.exists){
            return toast("El usuario ya existe", { type: "warning", autoClose: 1000 });
          } else{
            
            store.collection("registro").doc(res.user.uid).set(values);
            toast("Te Registraste con Exito", {
              type: "success",
              
            });
            historial.push('/login')

          } // true
          

  });*/
 



  const validNomAp = (str) => {

    let pattern = /^(?=.{3,30}$)[a-z]+(?:\s+[a-z]+)*$/i

    return !!pattern.test(str);
  };

  const validEdad = (str) => {

    let num = parseInt(str)
    if(num>10 && num<60){
        return true;
    }else{
      return false;
    }
  

  };

  const validPeso = (str) => {
    let pattern = /^([4-8][0-9]|[0-1][0-5][0-0])$/;
    return !!pattern.test(str);

  };

  const validEmail = (str) => {
    let pattern = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;


    return !!pattern.test(str);
  };
  const validPass = (str) => {
    let pattern = /^[A-Za-z0-9]{5,30}$/;
    // let pattern = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    // let pattern = /^(?=[^AZ]*[AZ])(?=[^az]*[az])(?=[^0-9]*[0-9]).{6,30}$/; 

    return !!pattern.test(str);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      //nombres
      if (!validNomAp(values.Nombres)) {
        return toast("Nombre no Valido", { type: "warning", autoClose: 1000 });
      }
      //Apellidos
      if (!validNomAp(values.Apellidos)) {
        return toast("Apellidos no Valido", { type: "warning", autoClose: 1000 });
      }
      //edad
      if (!validEdad(values.Edad)) {
        return toast("Edad no Valido", { type: "warning", autoClose: 1000 });
      }

      //peso
      if (!validPeso(values.Peso)) {
        return toast("Peso no Valido", { type: "warning", autoClose: 1000 });
      }
      //validacion Correo
      if (!validEmail(values.Email)) {
        return toast("Correo no Valido", { type: "warning", autoClose: 1000 });
      }
      ///Contrasenia
      if (!validPass(values.Password)) {
        return toast("Contrasena no Valida", { type: "warning", autoClose: 1000 });
      }
        registrar();
        registrarUsuario(values);
        //setValues({ ...initialStateValues });
    
  };

  useEffect(() => {
    if (currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      //getLinkById(currentId);
    }

  }, [currentId]);





  return (
    <div className='row mt-5'>

      <div className='col'></div>
      <div className='col bg-registro'>

        <form className='form-group' id="formulario" onSubmit={handleSubmit}>

          <div className="input-group mb-3">
            <div className='input-group-prepend'>
              <span className="input-group-text">Nombres</span>
            </div>
            <input
              className='form-control'
              placeholder='Introduce tu nombre'
              type="text"
              onChange={handleInputChange}
              value={values.Nombres}
              name="Nombres"
              required
              title="Letras. Tamaño mínimo: 3. Tamaño máximo: 30"

            />
          </div>

          <div className="input-group mb-3">
            <div className='input-group-prepend'>
              <span className="input-group-text">Apellidos</span>
            </div>
            <input
              className='form-control'
              placeholder='Introduce tu apellido'
              type="text"
              onChange={handleInputChange}
              value={values.Apellidos}
              name="Apellidos"
              required
              title="Letras. Tamaño mínimo: 3. Tamaño máximo: 30"
            />
          </div>


          <div className="input-group mb-3">
            <div className='input-group-prepend'>
              <span className="input-group-text">Edad</span>
            </div>
            <input
              className='form-control'
              placeholder=''
              type="number"
              onChange={handleInputChange}
              value={values.Edad}
              name="Edad"
              required

            />

            <div className='input-group-prepend'>
              <span className="input-group-text">Peso</span>
            </div>
            <input
              className='form-control'
              placeholder=''
              type="number"
              onChange={handleInputChange}
              value={values.Peso}
              name="Peso"
              required
              />
              <label className="label text-white">Kg</label>
          </div>

          <div className="form-check form-check-inline mb-3">
            <div className='input-group-prepend '>
              <span className="input-group-text mg-r">Sexo</span>
            </div>
            <input
              className='form-check-input'
              type="radio"
              onChange={handleInputChange}
              name="Sexo"
              value='mujer'
              required

            />
            <label className="form-check-label form-check form-check-inline text-white" for="inlineRadio1">Mujer</label>

            <input
              className='form-check-input'
              type="radio"
              onChange={handleInputChange}
              name="Sexo"
              value='hombre'
              required
            />
            <label className="form-check-label form-check form-check-inline text-white" for="inlineRadio2">Hombre</label>

          </div>


          <div className="input-group mb-3" >
            <div className='input-group-prepend'>
              <span className="input-group-text"> Correo</span>
            </div>
            <input
              className='form-control'
              placeholder='Introduce tu correo electronico'
              type="text"
              onChange={handleInputChange}
              value={values.Email}
              name="Email" 
              required/>
          </div>

          <div className="input-group mb-3">
            <div className='input-group-prepend'>
              <span className="input-group-text">Contraseña</span>
            </div>
            <input
              className='form-control'
              placeholder='Introduce una contraseña'
              type="password"
              onChange={handleInputChange}
              value={values.Password}
              name="Password"
              title="ingrese de 5 a 30 caracteres alfanumericos"
              required
            />

          </div>

          <input
            className='btn btn-info btn-block mt-4'
            value='Registrar Usuario'
            type="submit" />
        </form>

      </div>
      <div className='col'></div>

    </div>
  )
}

export default Registro
