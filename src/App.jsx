import React from 'react';
import Registro from './components/Registro'
import Login from './components/Login'
import Inicio from './components/Inicio'
// import Niveles from './components/Niveles'
import Menu from './components/Menu'
import './assets/css/App.css'
import './firebaseConfig'
import{ToastContainer} from 'react-toastify'
import 'react-toastify/dist/react-toastify.cjs.development'


import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';


import "react-toastify/dist/ReactToastify.css";
import Niveles from "./components/Niveles"
import CategoriaPrincipiante from "./components/CategoriaPrincipiante"
import CategoriaIntermedio from "./components/CategoriaIntermedio"
import CategoriaAvanzado from "./components/CategoriaAvanzado"
import RutaPrivada from './components/RutaPrivada';

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
            <Route exact path='/categoriaprincipiante' component={CategoriaPrincipiante}></Route>
            <Route exact path='/categoriaintermedio' component={CategoriaIntermedio}></Route>
            <Route exact path='/categoriaavanzado' component={CategoriaAvanzado}></Route>
            
          </Switch>

        </Router>

      { <ToastContainer /> }
 

      </div>
  );
}

export default App;
