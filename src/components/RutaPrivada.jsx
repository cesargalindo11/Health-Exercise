
import React ,{useEffect,useState}from 'react'
import {Redirect, Route, useHistory} from 'react-router'
import {auth} from '../firebaseConfig'


 const RutaPrivada = ({component:Component, ...rest}) => {

 
    const historial = useHistory()
    const [usuario, setUsuario] = useState(null)

  
      auth.onAuthStateChanged((user) => {
  
        if (user) {
          setUsuario(user.email)
          console.log(user.email);
        }
  
      })
  
    

    return (
      
      <Route {...rest}>
        {
         usuario
        ? <Component/> 
        : <Redirect to="/login"/> 
        }
      </Route>
    )
}
export default RutaPrivada;