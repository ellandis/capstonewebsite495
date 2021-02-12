import React from 'react';
import "./style.css";

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="#">University of Alabama Capstone CS 495</a>
        </nav>
        <div className="headerMenuText">
            Capstone CS 495
        </div>
    </header>
   )

 }

export default Header;