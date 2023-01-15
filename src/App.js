import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import './index.css'
const person = require('../src/img/Scooter Guy.png')

function App() {
  return (
  <>

  <Navbar />
  <Header image= {person}/>  
  </>
  )
}

export default App;
