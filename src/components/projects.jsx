import React, {useState} from "react";
import "./compstyles.css"
import { motion, transform } from "framer-motion";
export const Projects=()=>{
  
   
    return(
        
            
            <div className="allicons ">
      <motion.div /*animate={{
                x: [-1250, 1250, ]}} transition={{repeat: Infinity, duration:2 
            }}*/
            /*animate={{x: [0,40,0,-40,0],
            y: [0,40,0,-40,0]}}
            transition={{repeat: Infinity, duration:50}}*/
            className="icons ">
            <i className="fa-brands fa-react" ></i>
            <i className="fa-brands fa-js"></i>
            <i class="fa-solid fa-square"></i>
            <i className="fa-brands fa-html5"></i>
            <i class="fa-solid fa-square"></i>
            <i className="fa-brands fa-python"></i>      
            <i class="fa-solid fa-square"></i>
            <i className="fa-brands fa-bootstrap"></i>      
            <i class="fa-solid fa-square"></i>
            <i className="fa-brands fa-css3-alt"></i>     
            <i class="fa-solid fa-square"></i>
            <i className="fa-brands fa-square-github"></i>
            <i class="fa-brands fa-slack"></i>
            <i class="fa-brands fa-jira"></i>
            <i class="fa-duotone fa-database"></i>
            <i class="fa-solid fa-database"></i>
            <i class="fa-brands fa-node"></i>
            <i class="fa-brands fa-windows"></i>
            <i class="fa-brands fa-linux"></i>
      </motion.div>

      
      </div>
            

    )
}