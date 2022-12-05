import React, {useState, useEffect} from "react"
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
            <nav className="navbar navbar-expand-md bg-light flex-sm-nowrap flex-wrap">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <div className="border border-dark border-2 rounded-pill ">
                            <img className="" src={hamburger} style={{height: 60}}
                                 alt="hamburger"/>
                        </div>
                    </button>
                    <span className="navbar-brand w-100">
                        <Link to={'/'}><img src={logo} style={{height: 80}} alt="Logo"/></Link>
                    </span>
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav container row">
                            <div className="row align-items-center d-inline-block">
                                <div className="col fs-4 mx-3">
                                    <Link className="nav-link d-flex " to={'/visit'}>
                                        <img className="float-start img-fluid mx-2" src={visit} style={{height: 60}}
                                             alt="visit"/>
                                        VISIT HISTORY
                                    </Link>
                                </div>
                                <div className="col fs-4 mx-3">
                                    <Link className="nav-link d-flex align-items-center" to={'#'}>
                                        <img className="float-start img-fluid mx-2" src={drugs}
                                             alt="drugs" style={{height: 60}}/>
                                        DRUGS
                                    </Link>
                                </div>
                                <div className="col fs-4 mx-3">
                                    <Link className="nav-link d-flex align-items-center" to={'#'}>
                                        <img className="float-start img-fluid mx-2" src={contact}
                                             alt="contact"  style={{width: 60}}/>
                                        CONTACT
                                    </Link>
                                </div>
                                <div className="col fs-4 mx-3">
                                    <Link className="nav-link d-flex align-items-center" to={'/register-visit'}>
                                        <img className="float-start img-fluid mx-2" src={newVisit} alt="newVisit"  style={{height: 60}}/>
                                        MAKE AN APPOINTMENT
                                    </Link>
                                </div>
                                {/*<ul className="navbar-nav text-black mx-auto">*/}
                                {/*    <li className="nav-link fs-5 px-5">*/}
                                {/*        <Link to={'/visit'}>*/}
                                {/*            <img className="float-start img-fluid mx-2" src={visit}*/}
                                {/*                 style={{height: 60}}*/}
                                {/*                 alt="visit"/>*/}
                                {/*            VISIT <br/>HISTORY*/}
                                {/*        </Link>*/}
                                {/*    </li>*/}

                                {/*    <li className="nav-link fs-5 px-5">*/}
                                {/*        <Link to={'#'}>*/}
                                {/*            <img className="float-start img-fluid mx-2 " src={drugs}*/}
                                {/*                 style={{height: 60}}*/}
                                {/*                 alt="drugs"/>*/}
                                {/*            DRUGS*/}
                                {/*        </Link>*/}
                                {/*    </li>*/}

                                {/*    <li className="nav-link fs-5 px-5">*/}
                                {/*        <Link to={'#'}>*/}
                                {/*            <img className="float-start img-fluid mx-2" src={contact}*/}
                                {/*                 style={{height: 60}}*/}
                                {/*                 alt="contact"/>*/}
                                {/*            CONTACT*/}
                                {/*        </Link>*/}
                                {/*    </li>*/}

                                {/*    <li className="nav-link fs-5 px-5">*/}
                                {/*        <Link to={'/register-visit'}>*/}
                                {/*            <img className="float-start img-fluid mx-2" src={newVisit}*/}
                                {/*                 style={{height: 60}}*/}
                                {/*                 alt="newVisit"/>*/}
                                {/*            MAKE AN <br/>APPOINTMENT*/}
                                {/*        </Link>*/}
                                {/*    </li>*/}
                                {/*</ul>*/}
                            </div>
                        </div>
                    </div>

                    <div className="w-100">
                        <div className="nav-link d-flex justify-content-end pb-5">
                            <div
                                className="menu-login button-login fs-3 text-black border border-dark border-2 rounded-pill p-2 "
                                role="button">
                                <p>{'\u00A0'}{'\u00A0'}Login | Register{'\u00A0'}</p>
                                <div className="fs-1 d-inline">
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