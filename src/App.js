import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



 function App() {
  return (
    <Router>
      <div className="padre">
       
        <nav className="boton">
          <a href="/#">Sig in</a>
          <a href="/#">Sig on</a>
        </nav>
   
       <div className="img" >
       <img src="logo192.png"></img>;
       </div>
        


      </div>
    </Router>
  );
}

function Home() {
  return 
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


export default App;
