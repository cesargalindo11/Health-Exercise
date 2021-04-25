import React from 'react';
import Registro from './components/Registro'
import Login from './components/Login'
import Inicio from './components/Inicio'
import Menu from './components/Menu'
import './assets/css/App.css';


import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';


function App() {
  return (
    
      <div className="contenedor">

        <Router>
          <Menu></Menu>

          <Switch>
            <Route exact path='/' component={Inicio}></Route>
            <Route path='/registro' component={Registro}></Route>
            <Route path='/login' component={Login}></Route>
          </Switch>

        </Router>

      
      </div>
  );
}

export default App;
