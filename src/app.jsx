import React, {useState} from 'react';
import './App.css';
import { Header } from './components/header.jsx';
import { Projects } from './components/projects.jsx';
import { About}  from './components/about';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function App() {
  const[trigger, setTrigger]=useState(false)
  const handleTrigger=(trigger)=>{
      if(trigger== false){
      setTrigger(true)
      }else{
        setTrigger(false)
      }
      
  }
  return (
    <div className="App">
      <div className="title">
      <h1 className='name'>Yisas</h1>
      <h2>SUP</h2></div>
      <Link to="/aboutme"><h1 className='about'>under  me</h1></Link>
      <h1 className='contact' type='button' data-bs-toggle="modal" data-bs-target="#exampleModal">Contact me</h1>
 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Contact Information</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div className="d-grid">
          <div className="d-flex mx-auto info">
            <span><i class="fa-solid fa-envelope"></i></span>
            <span>juan249325@gmail.codsafadgdm</span>
            </div>
       
        <div className="d-flex mx-auto info">
        <span><i class="fa-solid fa-phone"></i></span>
        <span>+506 6047 26dsfsdafa2</span>
        </div> 
        </div>
    
      </div>
      <div class="modal-footer">
      <a href="www.linkedin.com/in/juan-carlos-campos-14a7aa212"><i class="fa-brands fa-linkedin"></i></a>
      <a href="https://github.com/yisas93"><i class="fa-brands fa-github"></i></a>
     
        
        
      </div>
    </div>
  </div>
</div>


      <div><About/></div>
      <div><Header/></div>
      
   
    </div>
  );
}

export default App;
