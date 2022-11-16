import React, {useEffect, useRef, useState} from "react"
import InputFields from "../components/InputFields";


import "../Login/Login.css"
import axios from "axios";
import {useHistory} from "react-router-dom";


export default function Register() {
    const [isActive, setIsActive] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [email, setEmail] = useState("");
    const [telephoneNumber, setTelephoneNumber] = useState("");
    const [pesel, setPesel] = useState("");
    const [gender, setGender] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [emailInfo, setEmailInfo] = useState("");
    const [passwordColor, setPasswordColor] = useState("white");
    const [passwordInfo, setPasswordInfo] = useState("");
    const [confirmationColor, setConfirmationColor] = useState("white");
    const [passwordConfirmationInfo, setPasswordConfirmationInfo] = useState("");
    const [emailColor, setEmailColor] = useState("white");

    const handleChange = (e) => {
        setGender(e.target.value);
    }
    let passValidation = /(?=.*[!#@$^%*])[a-zA-Z0-9!#@$%*^]{6,100}$/;

    useEffect(() => {
        const isPasswordOk = setTimeout(() => {
            if (password.match(passValidation)) {
                setPasswordColor("green")
                setPasswordInfo("")

            } else {
                setPasswordColor("salmon");
                setPasswordInfo("invalid password")
            }
            // password.match(passValidation) ? setPasswordColor("green") : setPasswordColor("salmon");
            if (password.length == 0) {
                setPasswordColor("white")
                setPasswordInfo("")
            }
        }, 1000);
        return () => {
            clearTimeout(isPasswordOk)
        }
    }, [password])

    useEffect(() => {
        const isConfirmationOk = setTimeout(() => {
            // passwordConfirmation === password ? setConfirmationColor("green") : setConfirmationColor("salmon")
            if (passwordConfirmation === password) {
                setConfirmationColor("green")
                setPasswordConfirmationInfo("")
            } else {
                setConfirmationColor("salmon")
                setPasswordConfirmationInfo("passwords are different")
            }
            if (password.length == 0 ||
                passwordConfirmation.length == 0) {
                setConfirmationColor("white")
                setPasswordConfirmationInfo("")
            }
        }, 1000);
        return () => {
            clearTimeout(isConfirmationOk)
        }
    }, [passwordConfirmation, password])

    // useEffect(() => {
    //     const isEmailTaken = setTimeout( ()=> {
    //         axios.get("API", {
    //             params: {
    //                 email: `${email}`
    //             }
    //         }).then(({data}) => {
    //             console.log(data)
    //             //        jesli nie dostane uzytkownika to setEmailColor("green")
    //             //    else setEmailColor("salmon")
    //         })
    //     },1000)
    //     return () => {
    //         clearTimeout(isEmailTaken)
    //     };
    // }, [email]);


    const submitForm = (event) => {
        event.preventDefault()
        if (password === passwordConfirmation &&
            password.length > 6 &&
            pesel.length === 11 &&
            emailInfo === ""
        ) {
            fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password,
                    "firstName": firstName,
                    "lastName": lastName,
                    "birthDate": birthDate,
                    "telephoneNumber": telephoneNumber,
                    "pesel": pesel,
                    "sex": gender
                })
            })
                .then(response => response.json())
                .then(response => console.log(JSON.stringify(response)))
            routeChange()

        } else {
            alert("gdzie kurła")
        }
    }

    const history = useHistory();

    const routeChange = () => {
        let path = `/`;
        history.push(path);
    }
    return (

        <div className="containerr">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <div className="forms ">
                        <div className="form register">
                            <span className="title">register</span>
                            <form onSubmit={submitForm}>
                                <InputFields placeholder={"Enter your first name"} type={"text"} set={setFirstName}/>
                                <InputFields placeholder={"Enter your last name"} type={"text"} set={setLastName}/>
                                <InputFields placeholder={"Enter your email"} type={"email"} set={setEmail}
                                             info={emailInfo}/>
                                <InputFields info={passwordInfo} color={passwordColor}
                                             placeholder={"Enter your password"} type={"password"}
                                             set={setPassword}/>
                                <InputFields info={passwordConfirmationInfo} color={confirmationColor}
                                             placeholder={"Confirm your password"}
                                             type={"password"}
                                             set={setPasswordConfirmation}/>
                                <InputFields placeholder={"Enter your phone number"} type={"text"}
                                             set={setTelephoneNumber}/>
                                <InputFields type={"date"} set={setBirthDate}/>
                                <InputFields placeholder={"Enter your PESEL"} type={"text"}
                                             set={setPesel}/> {/*   TODO color/info */}
                                <div className="input-field ">
                                    <input style={{width: 'auto'}} type="radio" value="MALE"
                                           onChange={handleChange} name="gender"/>
                                    <label>Male</label>
                                    <input style={{width: 'auto'}} type="radio" value="FEMALE"
                                           onChange={handleChange} name="gender"/>
                                    <label>Female</label>
                                </div>
                                <button className="btn btn-success">submit</button>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
}