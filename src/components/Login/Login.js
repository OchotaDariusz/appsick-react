import React, {useState} from "react"
import "./Login.css"
import {useHistory} from "react-router-dom";
import InputFields from "../InputFields"
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom"
import {CgKey} from "react-icons/cg";

export default function Login() {
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
            <div
                className="pb-3 container-fluid col-6 mb-5 rounded-5 bg-dark text-dark bg-opacity-10 shadow my-5 text-center">
                <div className="container">
                    <div className="row">
                        <div className="form pt-2 col-sm-6 border">
                            <span className="fs-2">Login</span>
                            <form onSubmit={submitForm} className="text-center">
                                <div className="d-flex flex-column justify-content-center align-items-center mb-4">
                                    <InputFields placeholder={"Email"} type={"text"} set={setEmail}/>
                                    <InputFields placeholder={"Password"} type={"password"} set={setPassword}/>
                                </div>
                                <div>{info}</div>
                                <button
                                    className="btn fs-3 text-black border border-dark border-2 rounded-pill px-4 mx-2">Submit
                                </button>
                            </form>
                        </div>
                        <div className="col-sm-1">
                            <div className="outer">
                                <div className="inner"></div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <Link className="fs-3 text-black border border-dark border-2 rounded-pill p-2 px-4"
                                role="button" to={'/register'}>
                                Registration form
                            </Link>

                        </div>
                    </div>
                </div>


            </div>

            <Footer/>

        </>
    );
}