import React from "react";
import icon from './assets/logo.png'
import './Header.css'
import Section3 from "./Section3";
import Footer from "./Footer"

class Header extends React.Component{

    render(){
        return(
            <header className = "nav-bar">
                <div className = "nav-logo">
                    <img src={icon} alt="" className="nav-icon"></img>
                </div>
                <div className="nav-buttons">
                    <a href="">HOME</a><a href="">ABOUT</a><a href="">BLOG</a><a href="">CONTACT</a>
                </div>
            </header>



        )
    }

}

export default Header;