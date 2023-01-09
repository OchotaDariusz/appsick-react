import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import Collapse from 'react-bootstrap/Collapse';
import React, {useState} from "react";
import maleDoctor from "../../assets/icons/Lekarz.svg"
import femaleDoctor from "../../assets/icons/Lekarka.svg"
import {Link} from "react-router-dom";
import MapModal from "../Map/MapModal";
import {CloseIcon, ViewIcon} from "@chakra-ui/icons";
import {FiCheck} from "react-icons/fi";
import {BsFileEarmarkPdf} from "react-icons/bs";
import {isToday} from "../../utils/Utils";
import Button from "react-bootstrap/Button";

export default function TodayVisit({visit}) {

    const [open, setOpen] = useState(false);
console.log(visit)
console.log(isToday(visit))
console.log(new Date())
    return (
        <div>
            <div className="col-10 rounded-3 bg-white text-dark my-3 pb-3 px-4 pt-2 border border-2 btnx">
                <div className="row justify-content-between">
                    <div className="col-6 my-1 fs-3 text-start">
                        {visit?.doctor?.user?.firstName} {visit?.doctor?.user?.lastName}
                    </div>
                    <div className="col-auto text-capitalize text-decoration-underline"
                         onClick={() => setOpen(!open)}
                         aria-controls="example-collapse-text"
                         aria-expanded={open}
                         role="button">
                        <div className="fs-5 d-inline px-2">
                            <ViewIcon/>
                        </div>
                        See details
                    </div>
                </div>

                <div className="row align-items-start">
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
                            <br/>
                            {visit?.clinic?.clinicName === "Konsultacje Online" ?
                                <div className="row align-items-start">Online Visit</div> :
                                <MapModal visit={visit}/>}

                        </div>
                    </div>
                </div>

                {/*Rozsuwane*/}
                <Collapse in={open}>
                    <div>
                        <br/>
                        <hr/>
                        <div id="example-collapse-text">
                            <div className="fs-4 m-2">
                                Visit reason:
                                <br/>
                                type={visit.visitTypes[0]}
                                <br/>
                                id={visit.visitId}
                            </div>
                            <div>
                                {visit?.reason}
                            </div>
                            <div>
                                <hr/>
                                <div className="fs-4 m-2">
                                    Visit status:

                                </div>
                                {visit.status}
                                    </div>




                            <div>
                                <br/>
                                <hr/>
                                {isToday(visit) ?
                                    <Link to={`/visit/${visit?.visitId}`} className="btn btn-dark my-3">
                                        Ask doctor a question</Link> : ""}
                                {new Date(visit?.date) > new Date() ?
                                    <Button className="fs-3 text-dark bg-light border border-danger
                                            border-2 rounded-pill p-2 green-shadow mt-3 px-3 btnx d-inline-flex"
                                            onClick={() => {
                                                // cancelVisit(visit?.visitId)
                                            }
                                            }>
                                        <div className="fs-4 d-inline px-2">
                                            <CloseIcon/>
                                        </div>
                                        Cancel Visit
                                    </Button> :
                                    ""
                                }
                            </div>


                        </div>
                    </div>
                </Collapse>
            </div>

        </div>
    );
}