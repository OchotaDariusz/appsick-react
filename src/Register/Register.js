import React, {useRef, useState} from "react"
import InputFields from "../components/InputFields";


import "../Login/Login.css"


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

    //Regexy do emaila i hasła
    // let emailver = /^\S+@\S+\.\S+$/;
    // let passValidation = /(?=.*[!#@$^%*])[a-zA-Z0-9!#@$%*^]{6,100}$/;

    const handleChange = (e) => {
        setGender(e.target.value);
    }


    const submitForm = (event) => {

        setIsActive(current => !current);
        if (password === passwordConfirmation &&
            pesel.length !== 11 &&
            emailInfo === ""
        ) {
            fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "email": email.current.value,
                    "password": password.current.value,
                    "firstName": firstName.current.value,
                    "lastName": lastName.current.value,

                    "birthDate": birthDate.current.value,
                    "telephoneNumber": telephoneNumber.current.value,
                    "pesel": pesel.current.value,
                    "sex": gender
                })
            })
                .then(response => response.json())
                .then(response => console.log(JSON.stringify(response)))
        } else {
            event.preventDefault()
        }
    }


    return (
        <>
            <div className="container">
                <div className="forms">
                    <div className="form register">
                        <span className="title">register</span>
                        <form onSubmit={submitForm}>
                            <InputFields placeholder={"Enter your first name"} type={"text"} set={setFirstName}/>

                            <InputFields placeholder={"Enter your last name"} type={"text"} set={setLastName}/>
                            <InputFields placeholder={"Enter your email"} type={"email"} set={setEmail}/>
                            <div>{emailInfo}</div>
                            <InputFields placeholder={"Enter your password"} type={"password"} set={setPassword}/>
                            <InputFields placeholder={"Confirm your password"} type={"password"}
                                         set={setPasswordConfirmation}/>
                            <InputFields placeholder={"Enter your phone number"} type={"text"}
                                         set={setTelephoneNumber}/>
                            <InputFields type={"date"} set={setBirthDate}/>
                            <InputFields placeholder={"Enter your PESEL"} type={"text"} set={setPesel}/>
                            <div className={"input-field "}
                                 style={{
                                     backgroundColor: isActive ? 'salmon' : '',
                                     color: isActive ? 'white' : '',
                                 }}
                            >
                                <input type="radio" value="MALE"
                                       onChange={handleChange} name="gender"/>
                                <label>Male</label>

                                <input type="radio" value="FEMALE"
                                       onChange={handleChange} name="gender"/>
                                <label>Female</label>
                            </div>
                            <button>submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}