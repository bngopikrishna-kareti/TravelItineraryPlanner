import userIcon from ".//userIcon.jpeg";
import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="NavBar">
            {/* <a href="/">Contact</a> */}
            <Link to='/Contact'>Contact</Link>
            <a href="/">About Us</a>
            <a href="/">FAQs</a>
            <button className="UserIcon">
                <img src={userIcon} alt="user-icon"></img>
            </button>
        </nav>
     );
}
 
export default Navbar;
