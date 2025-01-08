import { NavLink } from "react-router-dom"
import logo from "/logo.png";
import "./Header.scss";
export const Header=()=>{
    return(
       <header>
       <img className="logo" src={logo} alt="logo"/>
        <nav>
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