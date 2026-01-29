import bild from "/Panova.jpg"
import './Home.scss'
import {About} from "../../components/About/About.jsx"
import { GoArrowRight } from "react-icons/go";
import {Skills} from "../../components/Skills/Skills.jsx"
import {Projects} from "../../components/Projects/Projects.jsx"
import {Contact} from "../../components/Contact/Contact.jsx"
import { FaLinkedinIn } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import { TfiEmail } from "react-icons/tfi";
export const Home=()=>{
    return(
    <>
        <div className="home" id="home">
          <div  className="containerMitNameUndFoto">
          
          <div className="myName"><span>Hi, I'm</span>
          <br/>
<h3>Natalia Panova</h3>

<p>a Javascript Full-Stack Developer. </p>
<p>Lover of creating products which make people's life easier.</p>
<div className="buttons">
    <a href="#projects" className=" button1">
     <span className="buttonName"> View my Work</span>  
     <i><GoArrowRight /></i></a>
    <a href="#contact" className="button2">Contact</a>
   
</div>
</div>

            <img src={bild} alt="foto" className="foto"/>
            </div>
             {/* <div className="links">
          
                  <a className="contact-page__profile-item" href="https://github.com/Khlipochenko" target="_blank">
                 <VscGithubAlt />
                </a>
                 <a className="contact-page__profile-item" href="https://www.linkedin.com/in/natalia-panova-5aa8a0346/"  target="_blank">
                 <FaLinkedinIn />
                     
                </a>
                  <a className="contact-page__profile-item"  href="mailto:khlipochenko@gmail.com"  target="_blank">
                <TfiEmail />
                     
                </a>
             </div> */}
             </div>
   
<About/>
<Skills/>
<Projects/>
<Contact/>

</>
)
}