import logo from './logo.svg';
import './App.css';
import Header from './comps/Header';
import Projects from './comps/Projects';
import Contact from './comps/Contact';
import React, { useState } from 'react'
import Home from './comps/Home';
import Expertise from './comps/Expertise'
import Footer from './comps/Footer';

function App() {
  const [open, set] = useState(true)
  return (
    <div>


      <Header />


    </div>
  );
}

export default App;
