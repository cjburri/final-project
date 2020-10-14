import React from 'react';
import './App.css';
import Home from './home';
import Login from './login';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Login/>  
      </div>
      
  );
}

export default App;
