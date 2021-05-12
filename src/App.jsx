import React from 'react';
import Registro from './components/Registro'
import Login from './components/Login'
import Inicio from './components/Inicio'
import Niveles from './components/Niveles'
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

function App() {


  return (
    
      <div>


        <Router>
          <Menu></Menu>

          <Switch>
            <Route exact path='/' component={Inicio}></Route>
            <Route path='/registro' component={Registro}></Route>
            <Route path='/login' component={Login}></Route>
            
          </Switch>

        </Router>

      <ToastContainer />
      <Niveles></Niveles>
      <CategoriaPrincipiante></CategoriaPrincipiante>
      <CategoriaIntermedio></CategoriaIntermedio>
      <CategoriaAvanzado></CategoriaAvanzado>

      </div>
  );
}

export default App;
