import React, {useRef, useState} from "react"
import "./Login.css"
import {useHistory} from "react-router-dom";
import InputFields from "../InputFields"
export default function Login() {
    const [info, setInfo] = useState("")
    const history = useHistory();
    const routeChange = () =>{
        let path = `/`;
        history.push(path);
    }

    // const email = useRef(null);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const submitForm =(event) =>{
        event.preventDefault()
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "email": email,
                                        "password": password
            })
        })
            .then(response => {
                console.log(response)
                localStorage.setItem('user', response.data)
                // if(response.status >199 && response.status <300 ){
                //     routeChange();
                // }
                setInfo("Invalid email or password")
                return response.json()
            })
            .then(response => console.log(JSON.stringify(response)))
    }

        console.log(email)
        localStorage.setItem("user", "JWT")
        console.log(localStorage)
        console.log(localStorage.clear())
        console.log(localStorage)

    return (
        <>
            <div className="containerr">
                <div className="forms">
                    <div className="form register">
                        <span className="title">login</span>
                        <form onSubmit={submitForm}>
                            <InputFields placeholder={"Email"} type={"text"} set={setEmail}/>
                            <InputFields placeholder={"Password"} type={"password"} set={setPassword}/>
                            <div>{info}</div>
                            <button >submit</button>
                            <a id="reg" href="/register">Register Now</a>
                        </form>
                    </div>
                </div>
            </div>
        </>
);
}