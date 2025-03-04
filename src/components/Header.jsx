import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'


const Header = ()=>{

    return(
<div className="navbar">
       <ul className="navigation">
        <li className="navlink"><NavLink to="/">Home</NavLink></li>
        <li className="navlink"><NavLink to="/about">About</NavLink></li>
        <li className="navlink"><NavLink to="/skills">Skills</NavLink></li>
        <li className="navlink"><NavLink to="/contact">Contact</NavLink></li>
       </ul>
       </div>
    );
};

export default Header;