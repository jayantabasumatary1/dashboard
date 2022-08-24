import React from 'react'
import "./input.css"

export const Input = () => {
    return (
        <div className='container'>
            <input className='input-container1' type="text" placeholder='Email/Emplyoe ID' /><br></br>
            <input className='input-container1' type="password" placeholder='Password' /><br></br>
            <div className='btn-container'>
                <button className='btn'><h3>login</h3></button>
            </div>
            <h4>or</h4>
            <div className='btn-container'>
                <button className='btn'><h3>register</h3></button>
            </div>
        </div>
    )
}
