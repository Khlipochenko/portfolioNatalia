import { Carousel } from "../../components/Carousel/Carousel";
import dataSkills from "./DataSkills.json";
import  "./Skills.scss";


export const Skills=()=>{
    return(
    <div className="skills-page">
    
        <h2> My skills</h2>
        <Carousel props={dataSkills}></Carousel>
        <p>As a motivated junior developer, I have hands-on experience working with core web technologies such as <b> JavaScript</b>, <b>React</b>,  <b>Node.js</b>, <b>Tailwind</b>, <b>CSS3</b>, <b>MongoDB</b>, <b>HTML5</b> and <b>Sass</b>. I am passionate about building responsive, user-friendly web applications and continually improving my coding skills. My focus is on writing clean, maintainable code and learning best practices in modern web development. I am eager to collaborate with experienced teams to contribute to meaningful projects and grow as a developer.</p>
    </div>
    )
}