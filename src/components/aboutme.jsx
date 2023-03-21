import React  from "react";
import { motion } from "framer-motion";
import sozial1 from "../img/sozial1.jpg"
import sozial2 from "../img/sozial2.jpg"
import sozial3 from "../img/sozial3.jpg"
import sozial4 from "../img/sozial4.jpg"
import starwars1 from "../img/starwars1.png"
import starwars2 from "../img/starwars2.png"
import starwars3 from "../img/starwars3.png"
import starwars4 from "../img/starwars4.png"
import starwars5 from "../img/starwars5.png"
import chatapp1 from "../img/chatapp1.jpg"
import chatapp2 from "../img/chatapp2.jpg"
import chatapp3 from "../img/chatapp3.jpg"
import chatapp4 from "../img/chatapp4.jpg"
import todo1 from "../img/todo1.jpg"
import todo2 from "../img/todo2.jpg"
import todo3 from "../img/todo3.jpg"
export const AboutMe=()=>{
    
    return(
        <div className="container-fluid screen ">
            <div className="d-flex">
            <motion.div 
            className="header-aboutme"
            animate={{x:[-1250, 0, ]}} 
            transition={{ duration:2 
            }}
            >
                <h1>About me</h1>
                <p>

Hi there, I'm Juan Carlos, a full-stack developer with experience in building web applications using a variety of technologies and frameworks. I specialize in front-end development using modern JavaScript frameworks such as React, as well as back-end development using Flask, Nodejs and Python.
I'm experienced in developing RESTful APIs, integrating with third-party APIs, and working with databases such as MySQL. I'm also proficient in using Git for version control and deploying applications to cloud platforms such as Heroku.
In addition to my technical skills, I'm a strong communicator and collaborator, and I'm committed to delivering high-quality work on time and on budget. I'm passionate about staying up-to-date with the latest technologies and best practices in web development.
If you're interested in learning more about my experience and how I can help with your web development needs, please feel free to reach out to me.
                </p>
            </motion.div>
            <motion.div 
              animate={{x: [1250, 0, ]}} transition={{ duration:2 
              }}
            className="buttons d-grid"
            >
                <a href="#skillscont"><span style={{color:"white"}}>• Skills</span></a>
                <a href="#projects"><span style={{color:"white"}}>• Projects</span></a>
              
                
            </motion.div>
</div>
        <div className="skills" id="skillscont">
            <div className="about-title">
            <h1>Skills</h1>
            </div>
            <motion.div 
            className="d-flex">
                <div className="skill d-grid">
                    <h3>Front-end</h3>
                    <span>• Javascript</span>
                    <span>• HTML5</span>
                    <span>• CSS3</span>
                    <span>• Bootstrap</span>
                    <span>• Reactjs</span>
                </div>
                <div className="skill d-grid">
                    <h3>Back-end</h3>
                    <span>• Python</span>
                    <span>• Flask</span>
                    <span>• SQLAlchemy</span>
                    <span>• Nodejs</span>
                    <span>• MySQL</span>
                </div>
                <div className="skill d-grid">
                    <h3>Other skills</h3>
                    <span>• GIT</span>
                    <span>• Linux</span>
                    <span>• Jira</span>
                    <span>• Framer-Motion</span>
                </div>
            </motion.div>
        </div>


        <div className="projects" id="projects">
          <h1>Projects</h1>

            <div className="d-sm-grid d-md-flex">
            <div className="project" >
                <div className="d-flex">
                  <div className="car-holder">
                <div id="carouselExampleControlsNoTouching1" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
                  <div className="carousel-inner">
                    <div className="carousel-item active sozialimg">
                      <img src={sozial4}  className="d-block w-100 " alt="..."/>
                    </div>
                    <div className="carousel-item sozialimg">
                      <img src={sozial1}  className="d-block w-100 " alt="..."/>
                    </div>
                    <div className="carousel-item sozialimg">
                      <img src={sozial3} className="d-block w-100 " alt="..."/>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching1" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching1" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                  </div>
                  <div className="text" >
                  <h1>Sozial</h1>
                  <p>An ecommerce app that combines the functionality of a traditional online store with social media features
                    , the app offers a variety of features that enhance the shopping and social media experience. For example 
                    users can save items to their whishlists. Overall, the app offers a unique and engaging platform for users 
                    to discover, shop and connect with others
                  </p>
                  </div>
                  </div>
                  <div className="d-flex buttons-project">
                    
                    <a href="https://github.com/Alvarojavier22/Proyecto-Sozial"><button className="button-project">Source Code</button></a>
                  
                  </div>
              </div>
              <div className="project mt-3" >
                <div className="d-flex">
                  <div className="car-holder" style={{border: "1px solid blue"}}>
                <div id="carouselExampleControlsNoTouching3" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={chatapp1}  className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={chatapp2}  className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={chatapp4} className="d-block w-100" alt="..."/>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching3" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching3" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                  </div>
                  <div className="text" >
                  <h1>Chat-app</h1>
                  <p>A chat app in which I used react.js for the front-end and Node.js and socket.Io for the backend and handling 
                    real-time communication between users, the objective for developing this chat was to hone my skills in front/ back-end development as well as
                    showcase my abilities to work with real-time data  
                  </p>
                  </div>
                  </div>
                  <div className="d-flex buttons-project">

                    <button className="button-project">Source Code</button>
                  
                  </div>
              </div>
            </div>
           
            <div className="d-sm-grid d-md-flex mt-3">
            <div className="project">
                <div className="">
                <div className="car-holder">
                  <div id="carouselExampleControlsNoTouching2" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
                    <div className="carousel-inner">
                      <div className="carousel-item active ">
                        <img src={starwars1}  className="d-block w-100 starimg" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src={starwars2}  className="d-block w-100 starimg" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src={starwars3}  className="d-block w-100 starimg" alt="..."/>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching2" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching2" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="text2">
                  <h1>Star Wars Blog</h1>
                  <p>I developed a Star Wars blog using React and fetched data from a public Star Wars API
                     to display information about characters, films, and planets. The blog features a clean 
                     and intuitive UI with responsive design for optimal viewing on various devices. By utilizing 
                     React components and props, the app efficiently renders data in a modular and reusable manner.
                      With this project, I gained experience working with API integrations, React functional components, 
                      and state management."
                  </p>
                </div>
                </div>
                <div className="d-flex buttons-project">
                  <a href="https://github.com/yisas93/star-wars-blog"><button className="button-project">Source Code</button></a>
                </div>
              </div>
              
              
              <div className="project mt-3" >
                <div className="d-flex">
                  <div className="car-holder" style={{border: "1px solid blue"}}>
                <div id="carouselExampleControlsNoTouching4" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={todo1}  className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={todo2}  className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={todo3} className="d-block w-100" alt="..."/>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching4" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching4" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                  </div>
                  <div className="text" >
                  <h1>Todo-List</h1>
                  <p>This Todo list app that was built using React and the Fetch API.

The app itself is a simple yet powerful tool for keeping track of all your tasks and to-dos in one place. With just a few clicks, you can add new tasks, edit existing ones, mark them as complete, and even delete them if necessary.
This app uses React, a popular JavaScript library for building user interfaces. React allowed me to create a highly dynamic and interactive app that responds to user input in real-time, making it a joy to use.

In addition, the app also uses the Fetch API to communicate with a backend server, allowing for seamless data retrieval and updating. 



                  </p>
                  </div>
                  </div>
                  <div className="d-flex buttons-project">

                    <button className="button-project">Source Code</button>
                  
                  </div>
              </div>
            </div>
        </div>
        </div>
    )
}