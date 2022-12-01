import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import Collapse from 'react-bootstrap/Collapse';
import {useState} from "react";
import maleDoctor from "../../assets/icons/DoctorMale.png";
import femaleDoctor from "../../assets/icons/DoctorFemale.png";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import VisitChat from "../VisitChat/VisitChat";
import {Link} from "react-router-dom";
import Map from "../Map/Map";
import {Spinner} from '@chakra-ui/react'

export default function Visit({visit}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="row align-items-center">

            <div className="row align-items-center text-center ">
                <div className="col-2 px-5 ">
                    <div className="col-auto rounded-3 bg-white text-dark shadow-sm p-2 ">
                        {visit?.date[0]}
                        <hr/>
                        {visit?.date[1].slice(0, 5)}
                    </div>
                </div>

                <div className="col-10 rounded-3 bg-white text-dark my-3 pb-3 px-4 pt-2">
                    <div className="row justify-content-between">
                        <div className="col-6 my-1 fs-3 text-start">
                            {visit?.doctor?.user?.firstName} {visit?.doctor?.user?.lastName}
                        </div>
                        <div className="col-auto text-capitalize text-decoration-underline"
                             onClick={() => setOpen(!open)}
                             aria-controls="example-collapse-text"
                             aria-expanded={open}
                             role="button">
                            See details
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-2">
                            <img src={visit?.doctor?.user?.image ?
                                visit?.doctor?.user?.image :
                                visit?.doctor?.user?.sex === "MALE" ?
                                    maleDoctor : femaleDoctor}
                                 className="img-fluid rounded-circle"
                                 style={{height: "100px", width: "100px"}}
                                 alt="doctor"/>
                        </div>
                        <div className="col-5 m-1">
                            <div className="row fs-5">
                                {visit?.doctor?.medicalSpecialities[0]}
                                <Map visit={visit}/>
                            </div>
                        </div>
                    </div>

                    {/*Rozsuwane*/}
                    <Collapse in={open}>
                        <div>
                            <br/>
                            <hr/>
                            <br/>
                            <div id="example-collapse-text">
                                <div className="fs-4">
                                    Recommendations
                                </div>
                                <div>
                                    first name
                                    <br/>
                                    {/*{visit.patient.birthDate}*/}
                                </div>
                                <br/>
                                <hr/>
                                <br/>
                                <div className="fs-4">
                                    Referrals
                                </div>
                                <div>
                                    {visit?.patient?.user?.telephoneNumber}
                                    <br/>
                                    {visit?.patient?.user?.email}
                                </div>
                                <br/>
                                <hr/>
                                <div className="btn btn-dark my-3">
                                    <Link to={`/visit/${visit?.visitId}`}>Chat with a doctor</Link>
                                </div>
                                <br/>

                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>
    );
}