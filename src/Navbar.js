import userIcon from ".//userIcon.jpeg";
import React from 'react';

const Navbar = () => {
    return ( 
        <nav className="NavBar">
            <a href="/">Contact</a>
            <a href="/">About Us</a>
            <a href="/">FAQs</a>
            <button className="UserIcon">
                <img src={userIcon} alt="user-icon"></img>
            </button>
        </nav>
     );
}
 
export default Navbar;
