import React, {useRef} from "react";
import { motion } from "framer-motion";
import sozial4 from "../img/sozial4.jpg"
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
                <a href="#skillscont"><span style={{color:"white"}}>•Skills</span></a>
                <a href="#projects"><span style={{color:"white"}}>•Projects</span></a>
                <span style={{color:"white"}}>•Resume</span>
                
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

            <div className="d-flex">
            <div className="project" >
                <div className="d-flex">
                  <div className="car-holder">
                <div id="carouselExampleControlsNoTouching1" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={sozial4}  class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src={sozial4}  class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src={sozial4} class="d-block w-100" alt="..."/>
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching1" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching1" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
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
                    <button className="button-project">Visit</button>
                    <a href="https://github.com/Alvarojavier22/Proyecto-Sozial"><button className="button-project">Source Code</button></a>
                  
                  </div>
              </div>
              <div className="project">
                <div className="d-flex">
                <div className="car-holder">
                  <div id="carouselExampleControlsNoTouching2" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src={sozial4}  class="d-block w-100" alt="..."/>
                      </div>
                      <div class="carousel-item">
                        <img src={sozial4}  class="d-block w-100" alt="..."/>
                      </div>
                      <div class="carousel-item">
                        <img src={sozial4}  class="d-block w-100" alt="..."/>
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching2" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching2" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="text">
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
            </div>
           
            <div className="d-flex mt-2">
              <div className="project" >
                <div className="d-flex">
                  <div className="car-holder" style={{border: "1px solid blue"}}>
                <div id="carouselExampleControlsNoTouching3" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={sozial4}  class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src={sozial4}  class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src={sozial4} class="d-block w-100" alt="..."/>
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching3" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching3" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                  </div>
                  <div className="text" style={{border:"1px solid red"}}>
                  <h1>Sozial</h1>
                  <p>An ecommerce app that combines the functionality of a traditional online store with social media features
                    , the app offers a variety of features that enhance the shopping and social media experience. For example users can save items to their whishlists. Overall, the app offers a unique and engaging platform for users to discover, shop and connect with others
                  </p>
                  </div>
                  </div>
                  <div className="d-flex buttons-project">
                    <button>Visit</button>
                    <button>Source Code</button>
                  
                  </div>
              </div>
              
              <div className="project">
                <div className="car-holder">
<div id="carouselExampleControlsNoTouching4" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={sozial4}  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={sozial4}  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={sozial4}  class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching4" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching4" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                </div>
              </div>
            </div>
        </div>
        </div>
    )
}