import "./HomePage.css"
import React from 'react'
import image1 from "../images/image1.jpg";
import { Link } from "react-router-dom";
const HomePage = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={image1} alt="profile" />

            </div>
            <div className="content">
                <h1>Warm Welcome to Flexday</h1>
                <div>
                    <Link to="/about" className="btn">
                        ABOUT
                    </Link>
                    <Link to="/contact" className="btn btn-light">
                        CONTACT

                    </Link>
                </div>
            </div>

        </div>
    )
}
export default HomePage;
