import React from 'react'
import LoginPage from '../components/LoginPage'
import Navbar from '../components/Navbar'

const Login = () => {
    return (
        <div className='Login-container'>
            <Navbar />
            <LoginPage />
        </div>
    )
}

export default Login