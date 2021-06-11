import React from 'react'
import './register.css'

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Lamasocial</h3>
                    <span className="loginDesc">Connect with friends and the world around you on lamasocial</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="text" className="loginInput" name="" id="" placeholder="Username"/>
                        <input type="text" className="loginInput" name="" id="" placeholder="Email"/>
                        <input type="text" className="loginInput" name="" id="" placeholder="Password"/>
                        <input type="text" className="loginInput" name="" id="" placeholder="Confirm Password"/>
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Log into account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
