import React from "react"
import './Navbar.css'
import logo from './logotest.png'
import visit from './visitstest.png'
import drugs from './drugstest.png'
import contact from './contact.png'
import findings from './findingstest.png'




export default function Navbar() {
    return (
        <div className="    " style={{backgroundColor:'white'}}>
            <div className="row">
                <div className="col-3">
                        <div className="justify-content-center px-5">
                            <img src={logo} alt="Logo" />
                        </div>
                </div>
                <div className="col-7 align-items-center">
                    <div className="row align-items-center" style={{height:'100%'}}>
                        <div className="col-2 text-justify" >
                            <img className="float-start w-10 mx-2" src={visit} alt="Logo" />

                            <p>VISIT</p>
                        </div>
                        <div className="col-2 text-justify" >
                            <img className="float-start w-10 mx-2" src={findings} alt="Logo" />

                            <p>FINDINGS</p>
                        </div>
                        <div className="col-2 text-justify" >
                            <img className="float-start w-10 mx-2" src={drugs} alt="Logo" />

                            <p>DRUGS</p>
                        </div>
                        <div className="col-2 text-justify" >
                            <img className="float-start w-10 mx-2" src={contact} alt="Logo" />

                            <p>CONTACT</p>
                        </div>
                        <div className="col-3 text-justify" >
                            <img className="float-start w-10 mx-2" src={contact} alt="Logo" />

                            <p>Make an appointment</p>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <button className="btn btn-secondary btn-sm my-3 mx-4">REGISTRATION</button>
                    <button className="btn btn-secondary btn-sm">LOGIN</button>

                </div>

                {/*<div className={"login-button"}><button className={'btn third'} type={'submit'}>Login</button></div>  Make an appointment */}
            </div>
        </div>

    );
}