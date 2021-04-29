import React from 'react';
import Registro from './components/Registro'
//import Auxi from './components/Auxi'
import Login from './components/Login'
import Inicio from './components/Inicio'
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
      </div>
  );
}

export default App;
