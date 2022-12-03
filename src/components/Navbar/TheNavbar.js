import React from "react"
import logo from '../../assets/logo/logo.svg'
import visit from '../../assets/icons/Visit.svg'
import drugs from '../../assets/icons/Drugs.svg'
import contact from '../../assets/icons/Contact.svg'
import newVisit from '../../assets/icons/new_visit.svg'
import hamburger from '../../assets/icons/hamburger.svg'
import {Link} from "react-router-dom";
import {CgKey} from "react-icons/cg"

export default function TheNavbar() {
    return (
        <>
            <nav className="navbar navbar-expand-md bg-light navbar-light flex-sm-nowrap flex-wrap">
                <div className="container-fluid">
                    <button className="navbar-toggler flex-grow-sm-1 flex-grow-0 me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbar5">
                        <div className="border border-dark border-2 rounded-pill ">
                            <img className="" src={hamburger} style={{height: 60}}
                                 alt="hamburger"/>
                        </div>
                    </button>
                    <span className="navbar-brand w-100">
                    <Link to={'/'}><img src={logo} style={{height: 80}} alt="Logo"/></Link>
                </span>
                    <div className="navbar-collapse collapse w-100 justify-content-center" id="navbar5">
                        <ul className="navbar-nav">
                            <li className="nav-link fs-5 px-5 ">
                                <Link to={'/visit'}>
                                    <img className="float-start img-fluid mx-2" src={visit} style={{height: 60}}
                                         alt="visit"/>
                                    VISIT <br/>HISTORY
                                </Link>
                            </li>

                            <li className="nav-link fs-5 px-5">
                                <div className="">
                                    <Link to={'#'}>
                                        <img className="float-start img-fluid mx-2 " src={drugs} style={{height: 60}}
                                             alt="drugs"/>
                                        DRUGS
                                    </Link>
                                </div>
                            </li>

                            <li className="nav-link fs-5 px-5">
                                <div className="">
                                    <Link to={'#'}>
                                        <img className="float-start img-fluid mx-2" src={contact} style={{height: 60}}
                                             alt="contact"/>
                                        CONTACT
                                    </Link>
                                </div>
                            </li>

                            <li className="nav-link fs-5 px-5">
                                <div className="">
                                    <Link to={'/register-visit'}>
                                        <img className="float-start img-fluid mx-2" src={newVisit} style={{height: 60}}
                                             alt="newVisit"/>
                                        MAKE AN <br/>APPOINTMENT
                                    </Link>
                                </div>
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
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );

}