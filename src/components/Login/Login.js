import React, {useState} from "react"
import "./Login.css"
import {Link, useHistory} from "react-router-dom";
import InputFields from "../InputFields"
import Modal from 'react-bootstrap/Modal';
import logo from '../../assets/logo/logo.svg'
import {Center, Divider} from '@chakra-ui/react'
import Register from "../Register/Register";

export default function Login(props) {

    const [registerModalShow, setRegisterModalShow] = React.useState(false);

    const [info, setInfo] = useState("")
    const history = useHistory();
    const routeChange = () => {
        let path = `/visit`;
        history.push(path);
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = (event) => {
        event.preventDefault()
        fetch(`http://localhost:8080/api/auth/login`, {
            method: 'POST',
            redirect: 'follow',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Cache': 'no-cache'
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
            })
            .catch(err => {
                setInfo("Invalid email or password")
                console.log(err.message)
            })
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
                                    <div className="form pt-2 col-sm-6 ">

                                        <span className="fs-2">Login</span>
                                        <form onSubmit={submitForm} className="text-center">
                                            <div className="d-flex flex-column justify-content-center align-items-center mb-4">
                                                <InputFields placeholder={"Email"} type={"text"} set={setEmail}/>
                                                <InputFields placeholder={"Password"} type={"password"} set={setPassword}/>
                                            </div>
                                            <div>{info}</div>
                                            <button
                                                className="btn fs-3 text-black border border-dark border-2 rounded-pill px-4 mx-2 custom-btn btn-14">Submit
                                            </button>

                                        </form>
                                    </div>
                                    <div className="col-sm-1">
                                        <Center height='350px'>
                                            <Divider orientation='vertical' />
                                        </Center>
                                    </div>
                                    <div className="col-sm-4 ">
                                        <br />
                                        <br />
                                        <br />
                                        <div className="fs-3">Don't have an account yet?</div>
                                        <br />

                                        <Link className="fs-3 text-black border border-dark border-2 rounded-pill p-2 px-4"
                                              onClick={() => setRegisterModalShow(true)}
                                        >
                                            Create new
                                        </Link>
                                        <Register
                                            show={registerModalShow}
                                            onHide={() => setRegisterModalShow(false)}/>

                                    </div>
                                </div>
                    </div>
                </Modal.Body>

            </Modal>


        </>
    );
}