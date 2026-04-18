
import logo from "/logo.png";
import "./Header.scss";
import { TfiAlignJustify } from "react-icons/tfi";
import { BsX } from "react-icons/bs";
import { useState} from "react";
import { useTranslation } from "react-i18next";
export const Header=()=>{
    const [menuIsOpen, setMenuIsOpen]=useState(false)
   const { t, i18n } = useTranslation();
    return(
       <header>
        <div className="flex justify-between items-center ">
       <img className="logo " src={logo} alt="logo"/>
        <div className="  ml-10! flex gap-4  text-[#C7283B] text-5xl! ">
            <select className=" bg-[#1B242F] mx-auto py-2 px-4 focus:ring-1 rounded-lg outline-none   font-semibold " defaultValue="de" onChange={(e) => i18n.changeLanguage(e.target.value)} >
      <option value="de" className="  border rounded-lg  p-2!" >
       DE
      </option>
      <option value="en" className="  border-gray-500 border rounded-lg  p-2!" >
    EN
      </option></select>
    </div></div>
       <nav className="burger">
       <TfiAlignJustify className="burger-logo" onClick={()=> setMenuIsOpen(true)}></TfiAlignJustify>
      
<>
<div className={`blur-1 ${menuIsOpen ? "is-open" : ""}`}>
    <div className="menu">
    <BsX className="closeMenu" onClick={()=> setMenuIsOpen(false)}/>
         <ul>
                <li  onClick={()=> setMenuIsOpen(false)}>
                    <a href='#home' className ='link' >Home</a>
                </li>
                <li  onClick={()=> setMenuIsOpen(false)}>
                    <a href='#about' className ='link' >{t("nav.about")}</a>
                </li>
                <li  onClick={()=> setMenuIsOpen(false)}>
                    <a href='#skills' className ='link' >{t("nav.skills")}</a>
                </li>
                <li  onClick={()=> setMenuIsOpen(false)}>
                    <a href='#projects' className ='link' >{t("nav.projects")}</a>
                </li>
                <li  onClick={()=> setMenuIsOpen(false)}>
                    <a href='#contact' className ='link' >{t("nav.contact")}</a>
                </li>
            </ul>
    </div></div>
</>
       </nav>
        <nav className="nav">
            <ul>
                <li> <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">{t("nav.about")}</a>
                </li>
                <li>
                    <a href="#skills">{t("nav.skills")}</a>
                </li>
                <li>
                   <a href="#projects">{t("nav.projects")}</a>
                </li>
                <li>
                     <a href="#contact">{t("nav.contact")}</a>
                </li>
            </ul>
        </nav>
       </header>
    )
}