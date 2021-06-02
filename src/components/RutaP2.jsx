
import React ,{useEffect,useState}from 'react'
import {Redirect, Route, useHistory} from 'react-router'
import {auth} from '../firebaseConfig'


 const RutaPrivada = ({component:Component, ...rest}) => {

 
    const historial = useHistory()
    const [registro, setRegistro] = useState(null)

    useEffect(() => {

  
      auth.onAuthStateChanged((user) => {
  
        if (user) {

          setRegistro(user.email)
          let ruta=window.location
          if(ruta=='http://localhost:3000/login'){
            historial.push('/niveles')
          }
          

        }
       
  
      })
  
    }, [historial])

    return (
      
      <Route {...rest}>
        {
         !registro 
        ? <Component/> 
        : ''
        }
       
      </Route>
    )
}
export default RutaPrivada;