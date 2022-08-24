import React from 'react'
import "./LoginPage.css"
import image1 from "../images/image1.jpg";

import SignIn from './SignIn';

const LoginPage = () => {
    return (
        <div className='first'>
            <div className='login'>
                <img className='image1' src={image1} alt="backgroungimage">
                </img>
            </div>
            <div className='content'>

                <SignIn />
            </div>
        </div>
    )
};
export default LoginPage;


