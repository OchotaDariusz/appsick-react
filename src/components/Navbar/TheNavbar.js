import React, {useState, useEffect} from "react"
import logo from '../../assets/logo/logo.svg'
import visit from '../../assets/icons/Visit.svg'
import drugs from '../../assets/icons/Drugs.svg'
import contact from '../../assets/icons/Contact.svg'
import newVisit from '../../assets/icons/new_visit.svg'
import hamburger from '../../assets/icons/hamburger.svg'
import {Link} from "react-router-dom";
import {CgKey} from "react-icons/cg"
import Login from "../Login/Login";
import Button from "react-bootstrap/Button";
import Register from "../Register/Register";

export default function TheNavbar() {

    const [loginModalShow, setLoginModalShow] = useState(false);
    const [registerModalShow, setRegisterModalShow] = useState(false);

    const logout = async () => {
        fetch(`http://localhost:8080/api/auth/logout`, {
            method: 'POST',
            redirect: 'follow',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Cache': 'no-cache'
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    return (
        <>
            <nav className="navbar navbar-expand-md bg-light  flex-nowrap">
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
                        <div className="navbar-nav container">
                            <div className="row flex-nowrap align-items-center">
                                <div className="col fs-4  mx-4 nvbr">
                                    <Link className="nav-link d-flex align-items-center" to={'/visit'}>
                                        <img className="float-start img-fluid mx-1" src={visit}
                                             alt="visit" style={{height: 60}}/>
                                        VISIT HISTORY
                                    </Link>
                                </div>
                                <div className="col fs-4 mx-4 nvbr">
                                    <Link className="nav-link d-flex align-items-center" to={'#'}>
                                        <img className="float-start img-fluid mx-1" src={drugs}
                                             alt="drugs" style={{height: 60}}/>
                                        DRUGS
                                    </Link>
                                </div>
                                <div className="col fs-4 mx-4 nvbr">
                                    <Link className="nav-link d-flex align-items-center" to={'#'}>
                                        <img className="float-start img-fluid mx-1" src={contact}
                                             alt="contact" style={{height: 60}}/>
                                        CONTACT
                                    </Link>
                                </div>
                                <div className="col fs-4 mx-4 nvbr">
                                    <Link className="nav-link d-flex align-items-center" to={'/register-visit'}>
                                        <img className="float-start img-fluid mx-1" src={newVisit} alt="newVisit"
                                             style={{height: 60}}/>
                                        MAKE AN APPOINTMENT
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-100">
                        <div
                            className="btnx collapse navbar-collapse nav-link d-flex justify-content-end align-items-center">

                            <div
                                className="menu-login button-login fs-3 text-black border border-dark border-2 rounded-pill p-2 green-shadow"
                                onClick={() => setLoginModalShow(true)}>
                                {'\u00A0'}{'\u00A0'}Login | Register{'\u00A0'}
                                <div className="fs-1 d-inline">
                                    <CgKey/>
                                </div>
                            </div>

                            <Login
                                show={loginModalShow}
                                onHide={() => setLoginModalShow(false)}
                                setRegisterModalShow={setRegisterModalShow}
                                setLoginModalShow={setLoginModalShow}
                            />
                            <Register
                                show={registerModalShow}
                                onHide={() => setRegisterModalShow(false)}
                                setRegisterModalShow={setRegisterModalShow}
                                setLoginModalShow={setLoginModalShow}
                            />

                        </div>

                    </div>
                </div>
            </nav>


        </>
    );

}