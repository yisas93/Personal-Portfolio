
import './App.css';
import { Navbar } from './components/navbar.jsx';
import { Landing } from './components/landing.jsx';
import { Skills } from './components/skills.jsx';
import { Projects } from './components/projects.jsx';
import { Code } from './components/code.jsx';
import { Contact } from './components/contact.jsx';
export const  App=()=> {
  return (
    <div>
    <div className="App">
      <Navbar/>
      <Landing/>
      <Skills/>
      <Code/>
      <Projects/>
      <Contact/>
    </div></div>
  );
}

