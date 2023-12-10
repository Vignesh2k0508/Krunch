import React from "react";
import logo from '../../Assets/krunch_logo.png'

const Navbar=()=>{
    return(
        <>
            <nav id="navbar">
                <div id="logo">
                    <img src={logo} alt="" />
                </div>
                
                    <ul id="menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
            </nav>
        </>
    )
}

export default Navbar;