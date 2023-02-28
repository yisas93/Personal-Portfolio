import React from 'react';
import './App.css';
import { Header } from './components/header.jsx';
import { Projects } from './components/projects.jsx';
import { About}  from './components/about';
import { motion } from "framer-motion";
function App() {
  return (
    <div className="App">
      <div className="title">
      <h1 className='name'>Juan Carlos Campos</h1>
      <h2>Full Stack Developer</h2></div>
      <h1 className='about'>About me</h1>
      <h1 className='contact'>Contact me</h1>
      <div><About/></div>
      <div><Header/></div>
    </div>
  );
}

export default App;
