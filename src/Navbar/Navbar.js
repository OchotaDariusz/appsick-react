import React from "react"
import './Navbar.css'
import logo from './logotest.png'
import visit from './visitstest.png'
import drugs from './drugstest.png'
import contact from './contact.png'
import findings from './findingstest.png'
import newVisit from './new_visit.png'
import {Link} from "react-router-dom";


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-light" style={{padding: '0px'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href={'/'}>
                    <div className="justify-content-center px-3">
                        <img src={logo} alt="Logo"/>
                    </div>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to={'/visit'}>
                                <img className="float-start mx-2 " src={visit} alt="Logo"/>
                                <p className={"float-start"}>MY APPOINTMENTS</p></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'#'}><img className="float-start mx-2" src={findings} alt="Logo"/>
                                <p className={"float-start"}>FINDINGS</p></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'#'}>
                                <img className="float-start mx-2" src={drugs} alt="Logo"/>
                                <p className={"float-start"}>DRUGS</p></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/visit/:visitId'}>
                                <img className="float-start mx-2" src={contact} alt="Logo"/>
                                <p className={"float-start"}>CONTACT</p></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/register-visit'}>
                                <img className="float-start mx-2" src={newVisit} alt="Logo"/>
                                <p className={"float-start"}>MAKE AN APPOINTMENT</p></Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <Link className="nav-link float-start" to={'/register'}>
                            <button className="btn btn-secondary btn-sm mx-2 my-1">REGISTRATION</button></Link>
                        <Link className="nav-link float-start" to={'/login'}>
                            <button className="btn btn-secondary btn-sm mx-2 my-1">LOGIN</button></Link>
                    </span>
                </div>
            </div>
        </nav>

    )
        ;
}