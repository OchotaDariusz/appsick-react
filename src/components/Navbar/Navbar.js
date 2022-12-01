import React from "react"
import logo from '../../assets/logo/logotest.png'
import visit from '../../assets/icons/Visits48.png'
import drugs from '../../assets/icons/Drugs48.png'
import contact from '../../assets/icons/Online48.png'
import newVisit from '../../assets/icons/Umow_wizyte48.png'
import {Link} from "react-router-dom";


export default function Navbar() {
    return (
        // <nav className="navbar navbar-expand-lg sticky-top bg-light p-0" >
        //     <div className="container-fluid">
        //         <a className="navbar-brand" href={'/'}>
        //             <div className="justify-content-center px-3">
        //                 <img src={logo} alt="Logo"/>
        //             </div>
        //         </a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        //                 aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse d-flex align-items-center justify-content-center" >
        //                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                     <li className="nav-item">
        //                         <Link className="nav-link" to={'/visit'}>
        //                             <img className="float-start mx-2 " src={visit} alt="Logo"/>
        //                             <p className={"float-start"}>MY APPOINTMENTS</p></Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link className="nav-link" to={'#'}><img className="float-start mx-2" src={findings}
        //                                                                  alt="Logo"/>
        //                             <p className={"float-start"}>FINDINGS</p></Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link className="nav-link" to={'#'}>
        //                             <img className="float-start mx-2" src={drugs} alt="Logo"/>
        //                             <p className={"float-start"}>DRUGS</p></Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link className="nav-link" to={'/visit/:visitId'}>
        //                             <img className="float-start mx-2" src={contact} alt="Logo"/>
        //                             <p className={"float-start"}>CONTACT</p></Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link className="nav-link" to={'/register-visit'}>
        //                             <img className="float-start mx-2" src={newVisit} alt="Logo"/>
        //                             <p className={"float-start"}>MAKE AN APPOINTMENT</p></Link>
        //                     </li>
        //                 </ul>
        //             <span className="navbar-text">
        //                 <Link className="nav-link float-start" to={'/register'}>
        //                     <button className="btn btn-secondary btn-sm mx-2 my-1">REGISTRATION</button></Link>
        //                 <Link className="nav-link float-start" to={'/login'}>
        //                     <button className="btn btn-secondary btn-sm mx-2 my-1">LOGIN</button></Link>
        //             </span>
        //         </div>
        //     </div>
        // </nav>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <div className="navbar-brand"><img src={logo} alt="Logo"/></div>
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
                <div className="d-flex justify-content-end">
                    <span className="navbar-text">
                        <Link className="nav-link float-start" to={'/register'}>
                            <button className="btn btn-secondary btn-sm mx-2 my-1">REGISTRATION</button></Link>
                        <Link className="nav-link float-start" to={'/login'}>
                            <button className="btn btn-secondary btn-sm mx-2 my-1">LOGIN</button></Link>
                    </span>
                </div>
            </div>
        </nav>

    );
}