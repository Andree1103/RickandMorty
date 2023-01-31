import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import Locations from './components/Locations';
import './App.css'
import Header from "./assets/img/Header.png"
import axios from 'axios';

function App() {


    console.log(location);
  
    return (
    <div className="App">
      <header>
        <img src={Header} style={{width:'100%'}} alt="" />
      </header>
        <Locations/>
    </div>
  )
}

export default App
