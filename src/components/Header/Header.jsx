import { NavLink } from "react-router-dom"
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
                    <NavLink to='/' className ='link' activeclassname='active'>Home</NavLink>
                </li>
                <li  onClick={()=> setMenuIsOpen(false)}>
                    <NavLink to='/about' className ='link' activeclassname='active'>About</NavLink>
                </li>
                <li  onClick={()=> setMenuIsOpen(false)}>
                    <NavLink to='/skills' className ='link' activeclassname='active'>Skills</NavLink>
                </li>
                <li  onClick={()=> setMenuIsOpen(false)}>
                    <NavLink to='/projects' className ='link' activeclassname='active'>Projects</NavLink>
                </li>
                <li  onClick={()=> setMenuIsOpen(false)}>
                    <NavLink to='/contact' className ='link' activeclassname='active'>Contact</NavLink>
                </li>
            </ul>
    </div></div>
</>
       </nav>
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to='/' className ='link' activeclassname='active'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className ='link' activeclassname='active'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/skills' className ='link' activeclassname='active'>Skills</NavLink>
                </li>
                <li>
                    <NavLink to='/projects' className ='link' activeclassname='active'>Projects</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className ='link' activeclassname='active'>Contact</NavLink>
                </li>
            </ul>
        </nav>
       </header>
    )
}