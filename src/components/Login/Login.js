import React, {useState} from "react"
import "./Login.css"
import {useHistory} from "react-router-dom";
import InputFields from "../InputFields"
import Modal from 'react-bootstrap/Modal';
import logo from '../../assets/logo/logo.svg'
import {Center, Divider} from '@chakra-ui/react'
import Register from "../Register/Register";
import {MdPersonAddAlt} from "react-icons/md";
import {RiSendPlaneLine} from "react-icons/ri";
import {useAuth} from "../Auth/Auth";
import {AiFillGoogleCircle} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {hideModal, showModal} from "../../redux/ducks/loginModal";


export default function Login(props) {

    const auth = useAuth()
    const [role, setRole] = useState('')

    const getUser = async () => {
        const data = await fetch("http://localhost:8080/api/auth/current", {
            credentials: 'include'
        })
        console.log(data)
        return await data.json()
    }

    const [info, setInfo] = useState("")

    const history = useHistory();
    const routeChange = () => {
        let path = `/`;
        history.push(path);
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const showLoginModal = () => {
        dispatch(showModal());
    }
    const hideLoginModal = () => {
        dispatch(hideModal());
    }

    const submitForm = (event) => {
        event.preventDefault()
        fetch(`http://localhost:8080/api/auth/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                routeChange()
                handleLogin()
            })
            .catch(err => {
                setInfo("Invalid email or password")
                console.log(err.message)
            })
    }

    const handleLogin = () => {
        getUser()
            .then(user => {
                setRole(user.role)
                setEmail(user.email)
                auth.login(email, user.role)
            })
            .catch(err => console.log(err.message))
    }

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Body>
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-auto">
                                <img className="" src={logo}
                                     alt="logo" style={{height: 160}}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form pt-2 col-md-6 ">

                                <span className="fs-2">Login</span>
                                <form onSubmit={submitForm} className="text-center">
                                    <div className="d-flex flex-column justify-content-center align-items-center mb-4">
                                        <InputFields placeholder={"Email"} type={"text"} set={setEmail}/>
                                        <InputFields placeholder={"Password"} type={"password"} set={setPassword}/>
                                    </div>
                                    <div>{info}</div>
                                    <button
                                        className="btn fs-3 text-black border border-dark
                                        border-2 rounded-pill p-2 px-4 btnx d-flex col-auto align-items-center"
                                        onClick={() => {
                                            props.setRegisterModalShow(false);
                                            hideLoginModal();
                                        }}>
                                        Submit
                                        <div className="fs-1 d-inline px-1">
                                            <RiSendPlaneLine/>
                                        </div>
                                    </button>
                                </form>
                            </div>
                            <div className="col-sm-1">
                                <Center height='350px'>
                                    <Divider orientation='vertical'/>
                                </Center>
                            </div>
                            <div className="col-sm-4 ">
                                <br/>
                                <div className="fs-3">Don't have an account yet?</div>
                                <br/>

                                <div className="btnx fs-3 text-black border border-dark border-2
                                rounded-pill p-1 px-3 d-inline-flex "
                                     role="button"
                                     onClick={() => {
                                         props.setRegisterModalShow(true);
                                         hideLoginModal();
                                     }}
                                >
                                    Join us
                                    <div className="fs-1 d-inline px-2">
                                        <MdPersonAddAlt/>
                                    </div>
                                </div>


                                <div role="button" className="btnx fs-3 text-black border border-dark border-2
                                rounded-pill p-2 d-inline-flex overflow-hidden">
                                    <div className="fs-1 d-inline px-3 align-content-center">
                                        <AiFillGoogleCircle/>
                                    </div>
                                    <a href="http://localhost:8080/oauth2/authorization/google">Login with Google</a>
                                </div>


                                <Register
                                    setRegisterModalShow={props.setRegisterModalShow}
                                />

                            </div>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>


        </>
    );
}