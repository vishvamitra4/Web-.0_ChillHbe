import React from "react";
import { HiMenuAlt4 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"
import logo from "../../images/logo.png"
import "../Components/css_files/Navbar.css";
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'


const Navbar = () => {

    const [toggle, Settoggle] = React.useState(false);

    return (
        <>
            <nav className="main-nav">
                <div className="logo">
                    <h2>
                        <span>C</span>hill
                        <span>H</span>be
                    </h2>
                </div>



                <div className= {(toggle) ? "mobile-menu-link" : "menu-link "}>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <button className="login"><a href="#">Login</a></button>
                        </li>
                    </ul>

                    <div onClick={() => Settoggle((prev) => !prev
                    )} className="hamburger-menu">
                        <a href="#">
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>




            </nav>
        </>
    )
};

export default Navbar;