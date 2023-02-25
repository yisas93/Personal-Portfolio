import React from 'react';
import './App.css';
import { Header } from './components/header.jsx';
import { Projects } from './components/projects.jsx';
import { About}  from './components/about';
import { motion } from "framer-motion";
function App() {
  return (
    <div className="App">
 
     
 <div className="slider">
                <motion.div className="slide_track">
               <motion.i className="fa-brands fa-react slide" ></motion.i>  
               <motion.i className="fa-solid fa-square slide" ></motion.i>
               <motion.i className="fa-solid fa-square slide"></motion.i>
               <motion.i className="fa-solid fa-square slide" ></motion.i>
               <motion.i className="fa-solid fa-square slide" ></motion.i>
               <motion.i className="fa-solid fa-square slide" ></motion.i>
               <motion.i className="fa-solid fa-square slide" ></motion.i>
               <motion.i className="fa-solid fa-square slide" ></motion.i>
               <motion.i className="fa-solid fa-square slide" ></motion.i>
               <motion.i className="fa-solid fa-square slide"></motion.i>
               <motion.i className="fa-solid fa-square slide"></motion.i>
               <motion.i className="fa-solid fa-square slide" ></motion.i>
               <motion.i className="fa-solid fa-square slide" ></motion.i>
               <motion.i className="fa-brands fa-js slide" ></motion.i>
           
                </motion.div>
            </div>
     
      
    </div>
  );
}

export default App;
