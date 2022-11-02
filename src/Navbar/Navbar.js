import React from "react"
import './Navbar.css'
import logo from './logoAppsick.png'

export default function Navbar() {
    return (
        <div className="nav">
            <div className="nav-name">
                <div className="name"><img src={logo}/></div>
            </div>
            <div className="nav-list">
                <ol>

                    <li><a href="#">VISIT</a></li>
                    <li><a href="#">FINDINGS</a></li>
                    <li><a href="#">DOCTORS</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ol>
            </div>
            <div className={"nav-search"}>
                <div className="search">
                    <input type="text" className="search__input" aria-label="search"
                           placeholder="enter your search"/>
                        <button className="search__submit" aria-label="submit search">
                            <i className="fa fa-search"></i> </button>
                </div>
            </div>
            <div className={"login-button"}><button className={'btn third'} type={'submit'}>Login</button></div>

        </div>

);
}