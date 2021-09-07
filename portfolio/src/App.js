import './App.css';
import React, { Component }  from 'react';
import Navbar from './Navbar';
import Home from './components/Home'
function App() {
  return (
    
    <div className="App">
      <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
      <Navbar/>
      <Home/>
    </div>
  );

}

export default App;