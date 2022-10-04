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
                    <Link to="/Recruiter" className="btn">
                        RECRUITER
                    </Link>
                    <Link to="/Employee" className="btn btn-light">
                        EMPLOYEE

                    </Link>
                </div>
            </div>

        </div>
    )
}
export default HomePage;
