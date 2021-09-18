import React from 'react'

import Routes from './routes'

import './App.css'
import logo from './assets/logo.svg'

function App() {
  return (
    <div className="container-app">
      <img src={logo} alt="AirCnC"/>
      <Routes />
    </div>
  );
}

export default App;
