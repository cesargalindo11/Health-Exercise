
import React ,{useEffect,useState}from 'react'
import {Redirect, Route, useHistory} from 'react-router'
import {auth} from '../firebaseConfig'


 const RutaPrivada = ({component:Component, ...rest}) => {

 
    const historial = useHistory()
    const [usuario, setUsuario] = useState(null)

<<<<<<< HEAD
=======
    useEffect(() => {

>>>>>>> e1716ad09a89bc061c3fa2964b35e90e44ec30d2
  
      auth.onAuthStateChanged((user) => {
  
        if (user) {
<<<<<<< HEAD
          setUsuario(user.email)
          console.log(user.email);
=======

          setUsuario(user.email)
          console.log(user.email);
        }else{
          historial.push('/login')
>>>>>>> e1716ad09a89bc061c3fa2964b35e90e44ec30d2
        }
  
      })
  
<<<<<<< HEAD
    
=======
    }, [historial])
>>>>>>> e1716ad09a89bc061c3fa2964b35e90e44ec30d2

    return (
      
      <Route {...rest}>
        {
<<<<<<< HEAD
         usuario
        ? <Component/> 
        : <Redirect to="/login"/> 
=======
         usuario 
        ? <Component/> 
        : ''
>>>>>>> e1716ad09a89bc061c3fa2964b35e90e44ec30d2
        }
      </Route>
    )
}
export default RutaPrivada;