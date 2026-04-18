import bild from "/Panova.jpg"
import './Home.scss'
import {About} from "../../components/About/About.jsx"
import { GoArrowRight } from "react-icons/go";
import {Skills} from "../../components/Skills/Skills.jsx"
import {Projects} from "../../components/Projects/Projects.jsx"
import {Contact} from "../../components/Contact/Contact.jsx"
import { useTranslation } from "react-i18next";
export const Home=()=>{
    const { t } = useTranslation();

    return(
    <>
        <div className="home" id="home">
          <div  className="containerMitNameUndFoto">
          
          <div className="myName"><span>{t("hero.title")}</span>
          <br/>
<h3 className="font-bold">Natalia Panova</h3>

<p>{t("hero.p-1")} </p>
<p>{t("hero.p-2")}</p>
<div className="buttons">
    <a href="#projects" className=" button1">
     <span className="buttonName"> {t("hero.button-1")}</span>  
     <i><GoArrowRight /></i></a>
    <a href="#contact" className="button2">{t("hero.button-2")}</a>
   
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