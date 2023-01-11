import React, {useState, useEffect} from "react"
import logo from '../../assets/logo/logo.svg'
import visit from '../../assets/icons/Visit.svg'
import drugs from '../../assets/icons/Drugs.svg'
import contact from '../../assets/icons/Contact.svg'
import newVisit from '../../assets/icons/new_visit.svg'
import hamburger from '../../assets/icons/hamburger.svg'
import {Link, useHistory} from "react-router-dom";
import {CgKey} from "react-icons/cg"
import Login from "../Login/Login";
import Button from "react-bootstrap/Button";
import Register from "../Register/Register";
import {useAuth} from "../Auth/Auth";
import maleDoctor from "../../assets/icons/Lekarz.svg";
import femaleDoctor from "../../assets/icons/Lekarka.svg";
import {useDispatch, useSelector} from "react-redux";
import {showModal, hideModal} from "../../redux/ducks/loginModal";

export default function TheNavbar() {

    const history = useHistory();
    const routeChange = () => {
        let path = `/`;
        history.push(path);

    }

    const dispatch = useDispatch();
    const loginModalShow = useSelector((state) => {
        return state.loginModal.loginModalShow;
    });
    const showLoginModal = () => {
        dispatch(showModal());
    }
    const hideLoginModal = () => {
        dispatch(hideModal());
    }

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
            // .then(res => res.json())
            .then(res => {
                console.log(res)
                auth.logout()
                window.location.reload(false)
                routeChange()
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    const auth = useAuth()

    return (
        <>
            <nav className="navbar navbar-expand-md bg-light  flex-nowrap rounded-4 green-shadow">
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

                        {!auth.email ? <div className="navbar-nav container">

                        </div> : <div className="navbar-nav container">
                            <div className="row flex-nowrap align-items-center">
                                <div className="col fs-4  mx-4 nvbr">
                                    <Link className="nav-link d-flex align-items-center" to={'/visit'}>
                                        <img className="float-start img-fluid mx-1" src={visit}
                                             alt="visit" style={{height: 60}}/>
                                        MY VISITS
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
                        </div>}

                    </div>

                    {!auth.email ?


                        <div className="w-100">
                            <div
                                className="btnx collapse navbar-collapse nav-link d-flex justify-content-end align-items-center">

                                <div
                                    className="menu-login button-login fs-3 text-black border border-dark border-2 rounded-pill p-2 green-shadow"
                                    onClick={showLoginModal}
                                    role="button">
                                    {'\u00A0'}{'\u00A0'}Login | Register{'\u00A0'}
                                    <div className="fs-1 d-inline">
                                        <CgKey/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        :
                        <>
                            <div className="w-25">
                                <div
                                    className="container collapse navbar-collapse nav-link d-flex justify-content-end align-items-center">

                                    <Link
                                        className="border border-dark border-2 rounded-pill p-2 green-shadow btnx"
                                        to={'/user-page'}
                                        role="button">
                                        <img src={visit?.doctor?.user?.image ?
                                            visit?.doctor?.user?.image :
                                            visit?.doctor?.user?.sex === "MALE" ?
                                                maleDoctor : femaleDoctor}
                                             className="img-fluid rounded-circle"
                                             style={{height: "50px", width: "50px"}}
                                             alt="doctor"/>
                                    </Link>

                                </div>
                            </div>

                            <div className="w-100">
                                <div
                                    className="collapse navbar-collapse nav-link d-flex justify-content-end align-items-center">

                                        <div className="justify-content-end">
                                            <div
                                                className="collapse navbar-collapse nav-link flex-nowrap d-inline-flex">

                                                <div
                                                    className="menu-login button-login fs-3 text-black border border-dark border-2 rounded-pill p-2 green-shadow btnx"
                                                    onClick={logout}
                                                    role="button">
                                                    {'\u00A0'}{'\u00A0'}Logout{'\u00A0'}
                                                    <div className="fs-1 d-inline">
                                                        <CgKey/>
                                                    </div>
                                                </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </>


                    }


                </div>
            </nav>

            <Login
                show={loginModalShow}
                onHide={hideLoginModal}
                setRegisterModalShow={setRegisterModalShow}
            />
            <Register
                show={registerModalShow}
                onHide={() => setRegisterModalShow(false)}
                setRegisterModalShow={setRegisterModalShow}
            />


        </>
    );

}