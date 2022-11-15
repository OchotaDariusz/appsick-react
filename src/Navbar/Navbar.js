import React from "react"
import './Navbar.css'
import logo from './logoAppsick.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { CiMedicalClipboard } from "react-icons/ci";
import {faStethoscope} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <div className="nav">
            <div className={"logo"}>
                <img src={logo} alt={"logo"}/>
            </div>
            <div className={"nav-list"}>
                <ol>
                    <li><a href="#"><CiMedicalClipboard className="ml-4 float-start mx-2" size={40}  />VISIT</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faStethoscope} className=""/>CONTACT</a></li>
                    <li><a href="#">LOGIN</a></li>
                </ol>

            </div>


        </div>

    );
}