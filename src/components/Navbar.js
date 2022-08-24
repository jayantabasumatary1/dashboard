import "./Navbar.css"
import { FaBars, FaTimes } from "react-icons/fa"
import React, { useState } from "react"
import { Link } from "react-router-dom"


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        }
        else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);
    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/"     >
                <h1>
                    Home
                </h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>

                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/login">Login/Register</Link>
                </li>
            </ul>
            <div className="Hamburger" onClick={handleClick}>
                {
                    click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (
                        <FaBars size={20} style={{ color: "#fff" }} />
                    )
                }


            </div>
        </div>
    )
}
export default Navbar;