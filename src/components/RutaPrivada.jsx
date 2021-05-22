
import React ,{useEffect,useState}from 'react'
import {Redirect, Route, useHistory} from 'react-router'
import {auth} from '../firebaseConfig'


 const RutaPrivada = ({component:Component, ...rest}) => {

 
    const historial = useHistory()
    const [usuario, setUsuario] = useState(null)

    useEffect(() => {

  
      auth.onAuthStateChanged((user) => {
  
        if (user) {

          setUsuario(user.email)
          console.log(user.email);
        }else{
          historial.push('/login')
        }
  
      })
  
    }, [historial])

    return (
      
      <Route {...rest}>
        {
         usuario 
        ? <Component/> 
        : ''
        }
      </Route>
    )
}
export default RutaPrivada;