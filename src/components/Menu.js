import React from 'react';
import { Link } from "react-router-dom";

function handleClick(e) {
    let menu = document.getElementById("menu"),
        nav = document.getElementById('navigation');

    nav.classList.toggle("xpand");
    menu.classList.toggle("change");
}
 
export function HamburgerMenu() { 
    return (
        <div id="menu" className="menu" onClick={handleClick}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    );
}

export function FullMenu() { 
    return (
        <nav id="navigation" className="navigation" onClick={handleClick}>
            <Link to="/">Home</Link>
            <Link to="/project">Projects</Link>
            <Link to="/story">Our Story</Link>
            <Link to="/crew">The Crew</Link>
            <Link to="/contact">Contact Us</Link>
        </nav>
    );
}

