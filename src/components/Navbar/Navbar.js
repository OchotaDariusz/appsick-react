import React from "react"
import logo from '../../assets/logo/logotest.png'
import visit from '../../assets/icons/Visit.svg'
import drugs from '../../assets/icons/Drugs.svg'
import contact from '../../assets/icons/Contact.svg'
import newVisit from '../../assets/icons/new_visit.svg'
import {Link} from "react-router-dom";
import {CgKey} from "react-icons/cg"
import key from "./key.svg"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <div className="navbar-brand"><Link to={'/'}><img src={logo} alt="Logo"/></Link></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav container row">
                        <div className="row row-cols-10 align-items-center">
                            <div className="col"></div>
                            <div className="col-2">
                                <Link className="nav-link d-flex align-items-center" to={'/visit'}>
                                    <img className="float-start img-fluid mx-2" src={visit} style={{height:80}}
                                         alt="visit"/>
                                    <p>VISIT HISTORY</p>
                                </Link>
                            </div>
                            <div className="col">
                                <Link className="nav-link d-flex align-items-center" to={'#'}>
                                    <img className="float-start img-fluid mx-2" src={drugs} style={{height:80}}
                                         alt="drugs"/>
                                    <p>DRUGS</p>
                                </Link>
                            </div>
                            <div className="col">
                                <Link className="nav-link d-flex align-items-center" to={'#'}>
                                    <img className="float-start img-fluid mx-2" src={contact} style={{height:80}}
                                         alt="contact"/>
                                    <p>CONTACT</p>
                                </Link>
                            </div>
                            <div className="col-2">
                                <Link className="nav-link d-flex align-items-center" to={'/register-visit'}>
                                    <img className="float-start img-fluid mx-2" src={newVisit} style={{height:80}}
                                         alt="newVisit"/>
                                    <p>MAKE AN APPOINTMENT</p>
                                </Link>
                            </div>
                            <div className="col"></div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end pb-5">
                    <div className="button-login  fs-3 text-black border border-dark border-2 rounded-pill p-2 " role="button">
                        <p>Login | Register  </p>
                        <div className="fs-1">
                            <CgKey/>
                            {/*<img src={key} alt="key"/>*/}

                        </div>

                    </div>
                </div>
            </div>
        </nav>

    );
}