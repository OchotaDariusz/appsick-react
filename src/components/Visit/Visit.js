import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import Collapse from 'react-bootstrap/Collapse';
import {useState} from "react";
import maleDoctor from "../../assets/icons/Lekarz.svg"
import femaleDoctor from "../../assets/icons/Lekarka.svg"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import VisitChat from "../VisitChat/VisitChat";
import {Link} from "react-router-dom";
import MapModal from "../Map/MapModal";
import {Spinner} from '@chakra-ui/react'
import Button from "react-bootstrap/Button";

export default function Visit({visit}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="row align-items-center">

            <div className="row align-items-center text-center ">
                <div className="col-2 px-3 ">
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
                                <MapModal visit={visit}/>
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
                                <div>
                                    <Link to={`/visit/${visit?.visitId}`} className="btn btn-dark my-3">Ask doctor a question</Link>
                                    {new Date(visit?.date) < new Date() ? <Button className="btn bi-skip-forward-btn-fill border-danger border-4 ">Cancel Visit</Button> : ""}
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