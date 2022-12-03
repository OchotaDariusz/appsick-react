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
            {/*<Navbar collapseOnSelect expand="lg" bg="light" >*/}
            {/*    <Container>*/}

            {/*        <Navbar.Brand href="/" className="">*/}
            {/*            <img*/}
            {/*                alt=""*/}
            {/*                src={logo}*/}
            {/*                width="300"*/}
            {/*                className=""*/}
            {/*            />{' '}*/}
            {/*        </Navbar.Brand>*/}
            {/*        <Navbar.Toggle aria-controls="responsive-navbar-nav" />*/}
            {/*        <Navbar.Collapse id="responsive-navbar-nav">*/}
            {/*            <Nav className="container-fluid justify-content-between">*/}
            {/*                <Nav.Link href="/visit">*/}
            {/*                    <img*/}
            {/*                        alt=""*/}
            {/*                        src={visit}*/}
            {/*                        width="40"*/}
            {/*                        className="d-inline-block "*/}
            {/*                    />*/}
            {/*                    VISIT HISTORY*/}
            {/*                </Nav.Link>*/}
            {/*                <Nav.Link href="/visit">*/}
            {/*                    <img*/}
            {/*                        alt=""*/}
            {/*                        src={drugs}*/}
            {/*                        width="40"*/}
            {/*                        className="d-inline-block "*/}
            {/*                    />DRUGS*/}
            {/*                </Nav.Link>*/}
            {/*                <Nav.Link href="/visit">*/}
            {/*                    <img*/}
            {/*                        alt=""*/}
            {/*                        src={contact}*/}
            {/*                        width="40"*/}
            {/*                        className="d-inline-block "*/}
            {/*                    />*/}
            {/*                    CONTACT</Nav.Link>*/}
            {/*                <Nav.Link href="/visit">*/}
            {/*                    <img*/}
            {/*                        alt=""*/}
            {/*                        src={newVisit}*/}
            {/*                        width="40"*/}
            {/*                        className="d-inline-block "*/}
            {/*                    />*/}
            {/*                    MAKE AN<br/> APPOINTMENT</Nav.Link>*/}

            {/*            </Nav>*/}
            {/*            <Nav>*/}
            {/*                <div className="d-flex justify-content-end pb-5">*/}
            {/*                    <div className="button-login  fs-3 text-black border border-dark border-2 rounded-pill p-2 "*/}
            {/*                         role="button">*/}
            {/*                        <p>Login | Register </p>*/}
            {/*                        <div className="fs-1">*/}
            {/*                            <CgKey/>*/}
            {/*                            /!*<img src={key} alt="key"/>*!/*/}

            {/*                        </div>*/}

            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </Nav>*/}
            {/*        </Navbar.Collapse>*/}
            {/*    </Container>*/}
            {/*</Navbar>*/}
            <br/>
            <nav className="navbar navbar-expand-sm justify-content-center align-items-start">
                <button className="navbar-toggler mr-auto" type="button" data-toggle="collapse" data-target="#navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-brand position-absolute mx-0">
                    <ul className="navbar-nav justify-content-center">
                        <li>
                            <Link className="nav-link d-flex align-items-center" to={'/visit'}>
                                <img className="float-start img-fluid mx-2" src={visit} style={{height: 80}}
                                     alt="visit"/>
                                <p>VISIT <br/>HISTORY</p>
                            </Link>
                        </li>

                        <li>
                            <Link className="nav-link d-flex align-items-center" to={'#'}>
                            <img className="float-start img-fluid mx-2" src={drugs} style={{height: 80}}
                                 alt="drugs"/>
                            <p>DRUGS</p>
                        </Link>
                        </li>

                        <li>
                            <Link className="nav-link d-flex align-items-center" to={'#'}>
                                <img className="float-start img-fluid mx-2" src={contact} style={{height: 80}}
                                     alt="contact"/>
                                <p>CONTACT</p>
                            </Link>
                        </li>

                        <li>
                            <Link className="nav-link d-flex align-items-center" to={'/register-visit'}>
                                <img className="float-start img-fluid mx-2" src={newVisit} style={{height: 80}}
                                     alt="newVisit"/>
                                <p>MAKE AN <br/>APPOINTMENT</p>
                            </Link>
                        </li>



                    </ul>

                </div>
                <div className="navbar-collapse collapse" id="navbar">
                    <div className="navbar-nav justify-content-center">
                        <div className="navbar-brand">
                            <Link to={'/'}><img src={logo} style={{height: 80}} alt="Logo"/></Link>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end pb-5">
                    <div className="button-login  fs-3 text-black border border-dark border-2 rounded-pill p-2 "
                         role="button">
                        <p>Login | Register </p>
                        <div className="fs-1">
                            <CgKey/>
                            {/*<img src={key} alt="key"/>*/}

                        </div>

                    </div>
                </div>
            </nav>

<br />


            {/*<nav className="navbar navbar-expand-lg bg-light justify-content-center align-items-start">*/}
            {/*    <div className="container-fluid justify-content-between">*/}

            {/*        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"*/}
            {/*                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"*/}
            {/*                aria-expanded="false"*/}
            {/*                aria-label="Toggle navigation">*/}
            {/*            <span className="navbar-toggler-icon"></span>*/}
            {/*        </button>*/}
            {/*        <div className="collapse navbar-collapse d-flex justify-content-center " id="navbarNavAltMarkup">*/}
            {/*            <div className="navbar-brand position-absolute mx-0">*/}
            {/*                <ul className="navbar-nav justify-content-center">*/}
            {/*                    <li>*/}
            {/*                        <Link className="nav-link d-flex align-items-center" to={'/visit'}>*/}
            {/*                            <img className="float-start img-fluid mx-2" src={visit} style={{height: 80}}*/}
            {/*                                 alt="visit"/>*/}
            {/*                            <p>VISIT HISTORY</p>*/}
            {/*                        </Link>*/}
            {/*                    </li>*/}

            {/*                    <li>*/}
            {/*                        <Link className="nav-link d-flex align-items-center" to={'#'}>*/}
            {/*                            <img className="float-start img-fluid mx-2" src={drugs} style={{height: 80}}*/}
            {/*                                 alt="drugs"/>*/}
            {/*                            <p>DRUGS</p>*/}
            {/*                        </Link>*/}
            {/*                    </li>*/}

            {/*                    <li>*/}
            {/*                        <Link className="nav-link d-flex align-items-center" to={'#'}>*/}
            {/*                            <img className="float-start img-fluid mx-2" src={contact} style={{height: 80}}*/}
            {/*                                 alt="contact"/>*/}
            {/*                            <p>CONTACT</p>*/}
            {/*                        </Link>*/}
            {/*                    </li>*/}

            {/*                    <li>*/}
            {/*                        <Link className="nav-link d-flex align-items-center" to={'/register-visit'}>*/}
            {/*                            <img className="float-start img-fluid mx-2" src={newVisit} style={{height: 80}}*/}
            {/*                                 alt="newVisit"/>*/}
            {/*                            <p>MAKE AN <br/>APPOINTMENT</p>*/}
            {/*                        </Link>*/}
            {/*                    </li>*/}
            {/*                </ul>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="d-flex justify-content-end pb-5">*/}
            {/*            <div className="button-login  fs-3 text-black border border-dark border-2 rounded-pill p-2 "*/}
            {/*                 role="button">*/}
            {/*                <p>Login | Register </p>*/}
            {/*                <div className="fs-1">*/}
            {/*                    <CgKey/>*/}
            {/*                    /!*<img src={key} alt="key"/>*!/*/}

            {/*                </div>*/}

            {/*            </div>*/}
            {/*        </div>*/}


            {/*    </div>*/}

            {/*</nav>*/}
        </>
    );

}