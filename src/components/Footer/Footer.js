import React from "react"
import Map from "../Map/Map";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandshake} from '@fortawesome/free-solid-svg-icons'
import attribution from "./Credits"

export default function Footer() {
    return (
        <div className="mt-auto">
            <div className="row text-white p-5" style={{backgroundColor: '#465969'}}>

                <div className="col-2">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="fs-4">Info</div>
                    <div className="fs-4">FAQ</div>
                    <div className="fs-4">Terms of use</div>
                    <br/>
                    <hr/>
                    <br/>
                    <div className="fs-4">
                        <Link className="nav-link d-flex align-items-center" to={'/credits'}>
                            <FontAwesomeIcon icon={faHandshake} className="me-2" />
                            Credits
                        </Link>
                        </div>


                </div>
                <div className="col-2">


                </div>
                <div className="col-2">


                </div>
                <div className="col-2">
                    <div className="fs-4">
                        Our location:
                    </div>
                    <div className="fs6">
                        Plac Szczepański 7/66
                        03-333 Warszawa
                    </div>


                </div>
                <div className="col-4" style={{height: '300px'}}>
                    {/*<img src={location} className="d-block w-10" alt="..."/>*/}
                    <Map/>
                </div>

            </div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src="https://img.freepik.com/free-vector/patients-doctors-meeting-waiting*/}
            {/*            -clinic-hall-hospital-interior-illustration-with-reception-person-wheelchair*/}
            {/*            -visiting-doctor-office-medical-examination-consultation*/}
            {/*            _74855-8496.jpg?w=1380&t=st=1669899594~exp=1669900194~hmac=88eb*/}
            {/*            d2ffd5661baf9f64558a184282d80d0658f7fd2b55f22354db855debbf15" alt="pic"/>*/}
            {/*</div>*/}

        </div>

    );
}