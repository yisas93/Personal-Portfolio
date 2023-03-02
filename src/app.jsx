import React from 'react';
import './App.css';
import { Header } from './components/header.jsx';
import { Projects } from './components/projects.jsx';
import { About}  from './components/about';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div className="title">
      <h1 className='name'>Juan Carlos Campos</h1>
      <h2>Full Stack Developer</h2></div>
      <Link to="/aboutme"><h1 className='about'>About me</h1></Link>
      <h1 className='contact'>Contact me</h1>
      <div><About/></div>
      <div><Header/></div>
    </div>
  );
}

export default App;
