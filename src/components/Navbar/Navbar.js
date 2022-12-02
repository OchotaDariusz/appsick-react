import React from "react"
import logo from '../../assets/logo/logotest.png'
import visit from '../../assets/icons/Visits48.png'
import drugs from '../../assets/icons/Drugs48.png'
import contact from '../../assets/icons/Online48.png'
import newVisit from '../../assets/icons/Umow_wizyte48.png'
import {Link} from "react-router-dom";
import {CgKey} from "react-icons/cg"

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
                                    <img className="float-start img-fluid mx-2" src={visit}
                                         alt="visit"/>
                                    <p>VISIT HISTORY</p>
                                </Link>
                            </div>
                            <div className="col">
                                <Link className="nav-link d-flex align-items-center" to={'#'}>
                                    <img className="float-start img-fluid mx-2" src={drugs}
                                         alt="drugs"/>
                                    <p>DRUGS</p>
                                </Link>
                            </div>
                            <div className="col">
                                <Link className="nav-link d-flex align-items-center" to={'#'}>
                                    <img className="float-start img-fluid mx-2" src={contact}
                                         alt="contact"/>
                                    <p>CONTACT</p>
                                </Link>
                            </div>
                            <div className="col-2">
                                <Link className="nav-link d-flex align-items-center" to={'/register-visit'}>
                                    <img className="float-start img-fluid mx-2" src={newVisit} alt="newVisit"/>
                                    <p>MAKE AN APPOINTMENT</p>
                                </Link>
                            </div>
                            <div className="col"></div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end pb-5">
                    <div className="btn-primary fs-3 rounded-pill button-login bg-black p-2 " role="button">
                        <p>Login | Register  </p>
                        <div className="fs-1">
                            <CgKey/>
                        </div>

                    </div>
                </div>
            </div>
        </nav>

    );
}