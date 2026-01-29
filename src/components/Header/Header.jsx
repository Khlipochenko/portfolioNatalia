
import logo from "/logo.png";
import "./Header.scss";
import { TfiAlignJustify } from "react-icons/tfi";
import { BsX } from "react-icons/bs";
import { useState, useEffect } from "react";
export const Header=()=>{
    const [menuIsOpen, setMenuIsOpen]=useState(false)
    return(
       <header>
       <img className="logo" src={logo} alt="logo"/>
       <nav className="burger">
       <TfiAlignJustify className="burger-logo" onClick={()=> setMenuIsOpen(true)}></TfiAlignJustify>
<>
<div className={`blur ${menuIsOpen ? "is-open" : ""}`}>
    <div className="menu">
    <BsX className="closeMenu" onClick={()=> setMenuIsOpen(false)}/>
         <ul>
                <li  onClick={()=> setMenuIsOpen(false)}>
                    <a href='#home' className ='link' >Home</a>
                </li>
                <li  onClick={()=> setMenuIsOpen(false)}>
                    <a href='#about' className ='link' >About</a>
                </li>
                <li  onClick={()=> setMenuIsOpen(false)}>
                    <a href='#skills' className ='link' >Skills</a>
                </li>
                <li  onClick={()=> setMenuIsOpen(false)}>
                    <a href='#projects' className ='link' >Projects</a>
                </li>
                <li  onClick={()=> setMenuIsOpen(false)}>
                    <a href='#contact' className ='link' >Contact</a>
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
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                   <a href="#projects">Projects</a>
                </li>
                <li>
                     <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
       </header>
    )
}