import React from "react"
import './Navbar.css'
import logo from './logoAppsick.png'

export default function Navbar() {
    return (
        <div className="nav">
            <div className={"logo"}>
                <img src={logo} alt={"logo"}/>
            </div>
            <div className={"nav-list"}>
                <ol>
                    <li><a href="#">VISIT</a></li>
                    <li><a href="#">CONTACT</a></li>
                    <li><a href="#">LOGIN</a></li>
                </ol>

            </div>


        </div>

    );
}