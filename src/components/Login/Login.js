import React, {useRef, useState} from "react"
import "./Login.css"
import {useHistory} from "react-router-dom";
import InputFields from "../InputFields"
import Footer from "../Footer/Footer";
import axios from "axios";

export default function Login() {
    const [info, setInfo] = useState("")
    const history = useHistory();
    const routeChange = () => {
        let path = `/`;
        history.push(path);
    }

    // const email = useRef(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = (event) => {
        event.preventDefault()
        axios.post('http://localhost:8080/api/auth/login', {
            "email": email,
            "password": password
        })
          .then(response => {
              console.log(response)
              document.cookie = `appsick=${response.data.value}`
              // if(response.status >199 && response.status <300 ){
              //     routeChange();
              // }
              setInfo("Invalid email or password")
          })
          .catch(err => console.log(err.message))
    }

    return (
        <>
            <div
                className="pb-3 container-fluid col-6 mb-5 rounded-5 bg-dark text-dark bg-opacity-10 shadow my-5 text-center">

                <div className="form pt-2">
                    <span className="fs-2">Login</span>
                    <form onSubmit={submitForm} className="text-center">
                        <div className="d-flex flex-column justify-content-center align-items-center mb-4">
                            <InputFields placeholder={"Email"} type={"text"} set={setEmail} />
                            <InputFields placeholder={"Password"} type={"password"} set={setPassword}/>
                        </div>
                        <div>{info}</div>
                        <button className="btn btn-lg rounded-pill btn-primary m-3">Submit</button>
                        <a className="btn btn-lg rounded-pill btn-secondary" id="reg" href="/register">Register Now</a>

                    </form>
                </div>

            </div>

            <Footer />

        </>
    );
}