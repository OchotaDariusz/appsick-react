import React from "react"
import './Navbar.css'
import logo from './logo.png'
import DoctorFemale from './DoctorFemale.png'
import DoctorMale from './DoctorMale.png'
import Drugs from './Drugs.png'
import Visits from './Visits.png'
import {faStethoscope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { CiMedicalClipboard } from "react-icons/ci";



export default function Navbar() {
    return (
        <div className="    ">
            <div className="row">
                <div className="col-3">
                    <div className="row">
                        <div className="col-6 justify-content-center">
                            <img src={logo} alt="Logo" />
                        </div>
                    </div>

                </div>
                <div className="col-6 align-items-center">
                    <div className="row">
                        <div className="col-2">
                            <CiMedicalClipboard className="ml-4 float-start mx-2" size={40}  />
                            VISIT
                        </div>
                        <div className="col-2">
                            FINDINGS
                        </div>
                        <div className="col-2">
                            CONTACTS
                        </div>
                        <div className="col-2">
                            <FontAwesomeIcon icon={faStethoscope} className=""/> Make an appointment

                        </div>
                        <div className="col-4">

                                <div className="search">
                                    <input type="text" className="search__input" aria-label="search"
                                           placeholder="enter your search"/>
                                    <button className="search__submit" aria-label="submit search">
                                        <i className="fa fa-search"></i></button>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    XX login XX

                </div>

                {/*<div className={"login-button"}><button className={'btn third'} type={'submit'}>Login</button></div>*/}
            </div>
        </div>

    );
}