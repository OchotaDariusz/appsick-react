import React from "react"
import logo from '../../assets/logo/logo.svg'
import visit from '../../assets/icons/Visit.svg'
import drugs from '../../assets/icons/Drugs.svg'
import contact from '../../assets/icons/Contact.svg'
import newVisit from '../../assets/icons/new_visit.svg'
import {Link} from "react-router-dom";
import {CgKey} from "react-icons/cg"
import key from "./key.svg"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function TheNavbar() {
    return (
        <>
            <nav className="navbar navbar-expand-sm  navbar-light flex-nowrap bg-light">
                <button className="navbar-toggler mr-2" type="button" data-toggle="collapse" data-target="#navbar5">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <span className="navbar-brand w-100">
                    <Link to={'/'}><img src={logo} style={{height: 80}} alt="Logo"/></Link>
                </span>
                <div className="navbar-collapse collapse w-100 justify-content-center" id="navbar5">
                    <ul className="navbar-nav mx-auto ">
                        <li className="nav-link d-flex align-items-center fs-5 px-5">
                            <div className="container d-inline-block">
                                <Link to={'/visit'}>
                                    <img className="float-start img-fluid mx-2" src={visit} style={{height: 60}}
                                         alt="visit"/>
                                    VISIT HISTORY
                                </Link>
                            </div>
                        </li>

                        <li className="nav-link d-flex align-items-center fs-5 px-5">
                            <Link to={'#'}>
                                <img className="float-start img-fluid mx-2 " src={drugs} style={{height: 60}}
                                     alt="drugs"/>
                                DRUGS
                            </Link>
                        </li>

                        <li className="nav-link d-flex align-items-center fs-5 px-5">
                            <Link to={'#'}>
                                <img className="float-start img-fluid mx-2" src={contact} style={{height: 60}}
                                     alt="contact"/>
                                CONTACT
                            </Link>
                        </li>

                        <li className="nav-link d-flex align-items-center fs-5 px-5">
                            <Link to={'/register-visit'}>
                                <img className="float-start img-fluid mx-2" src={newVisit} style={{height: 60}}
                                     alt="newVisit"/>
                                MAKE AN <br/>APPOINTMENT
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-100">
                    <div className="nav-link d-flex justify-content-end pb-5">
                        <div className="button-login  fs-3 text-black border border-dark border-2 rounded-pill p-2 "
                             role="button">
                            <p>Login | Register </p>
                            <div className="fs-1">
                                <CgKey/>
                                {/*<img src={key} alt="key"/>*/}

                            </div>

                        </div>
                    </div>
                </div>
            </nav>

        </>
    );

}