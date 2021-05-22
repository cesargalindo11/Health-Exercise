import React from 'react';
import Registro from './components/Registro'
import Login from './components/Login'
import Niveles from "./components/Niveles"
import Inicio from './components/Inicio'
import Menu from './components/Menu'
import './assets/css/App.css'
import './firebaseConfig'
import{ToastContainer} from 'react-toastify'
import 'react-toastify/dist/react-toastify.cjs.development'
import "react-toastify/dist/ReactToastify.css";


import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';




import CategoriaPrincipiante from "./components/CategoriaPrincipiante"
import CategoriaIntermedio from "./components/CategoriaIntermedio"
import CategoriaAvanzado from "./components/CategoriaAvanzado"
import RutaPrivada  from './components/RutaPrivada.jsx';

function App() {


  return (
    
      <div>


        <Router>
          <Menu></Menu>

          <Switch>
            <Route exact path='/' component={Inicio}></Route>
            <Route exact path='/registro' component={Registro}></Route>
            <Route exact path='/login' component={Login}></Route>
            <RutaPrivada exact path='/niveles' component={Niveles}></RutaPrivada>
            <RutaPrivada exact path='/categoriaprincipiante' component={CategoriaPrincipiante}></RutaPrivada>
            <RutaPrivada exact path='/categoriaintermedio' component={CategoriaIntermedio}></RutaPrivada>
            <RutaPrivada exact path='/categoriaavanzado' component={CategoriaAvanzado}></RutaPrivada>
            
          </Switch>

        </Router>

      { <ToastContainer /> }
 

      </div>
  );
}

export default App;
