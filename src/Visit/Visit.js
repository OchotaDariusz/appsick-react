import React, {useState, useEffect} from "react"
import {ChakraProvider} from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendarDays, faLocationDot, faChartLine, faPills, faXmark, faVideo} from '@fortawesome/free-solid-svg-icons'
import {getFakeData} from "./fakeData";
import Collapse from 'react-bootstrap/Collapse';

export default function Visit() {
    const data = getFakeData()

    // Rozsuwane See Details
    const [open, setOpen] = useState(false);

    const listOfVisits = data.map((v) =>
        <div className="row align-items-center" key={v.visitId}>

            <div className="row align-items-center">
                <div className="col-auto my-3 mx-2 container rounded-3 bg-white text-dark shadow-sm">
                    {v.date.slice(0, 10)}
                </div>

                <div className="col-9 container rounded-3 bg-white text-dark my-3">
                    <div className="row justify-content-between">
                        <div className="col-4 fs-3">
                            {v.doctorId.firstName} {v.doctorId.lastName}
                        </div>
                        <div className="col-auto text-capitalize text-decoration-underline"
                             onClick={() => setOpen(!open)}
                             aria-controls="example-collapse-text"
                             aria-expanded={open}>
                            See details
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-2">
                            <img src="https://www.getmaple.ca/site-content/uploads/2020/08/female_dr.jpg"
                                 className="img-fluid rounded-circle" style={{height: "100px", width: "100px"}}
                                 alt="doctor"/>
                        </div>
                        <div className="col-5 m-1">
                            <div className="row fs-5 mx-1">
                                {v.doctorId.medicalSpecialities}
                            </div>
                            <div className="row ">
                                <div className="col text-primary ">
                                    <FontAwesomeIcon icon={faLocationDot} className="me-2"/>
                                    {v.clinic.clinicName}, X: {v.clinic.longitude}, Y: {v.clinic.latitude}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Rozsuwane*/}

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
                                    {v.patient.firstName}
                                    <br/>
                                    {v.patient.birthDate}
                                </div>
                                <br/>
                                <hr/>
                                <br/>
                                <div className="fs-4">
                                    Referrals
                                </div>
                                <div>
                                    {v.patient.password}
                                    <br/>
                                    {v.patient.medicalData.weight}
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>
    )

    useEffect(() => {

    }, [])

    return (
        <ChakraProvider>
            <div className="container col-6 mx-auto rounded-5 bg-dark text-dark bg-opacity-10 shadow">

                <div className="row justify-content-center">
                    <div className="col-auto my-3 mx-2 container rounded-3 bg-white text-dark shadow-sm">
                        Today's visits:
                    </div>
                    <div className="col-9 container rounded-3 bg-white text-dark my-3 shadow-sm">
                        You do not have appointments planned for today.
                    </div>
                </div>

                <br/>

                <div className="row justify-content-center">
                    <div className="col-2"></div>
                    <div className="col fs-3 ">History</div>
                </div>

                <br/>

                <div className="row ">
                    <div className="col-2">

                    </div>
                    <div className="col-auto rounded-5 bg-white m-2 shadow-sm">
                        <FontAwesomeIcon icon={faCalendarDays} className="me-2"/>
                        Data
                    </div>
                    <div className="col-auto rounded-5 bg-white m-2">
                        <FontAwesomeIcon icon={faLocationDot} className="me-2"/>
                        Visits
                    </div>
                    <div className="col-auto rounded-5 bg-white m-2">
                        <FontAwesomeIcon icon={faChartLine} className="me-2"/>
                        Examinations
                    </div>
                    <div className="col-auto rounded-5 bg-white m-2">
                        <FontAwesomeIcon icon={faPills} className="me-2"/>
                        Prescriptions
                    </div>
                    <div className="col-auto rounded-5 bg-white m-2">
                        <FontAwesomeIcon icon={faVideo} className="me-2"/>
                        Video calls
                    </div>
                    <div className="col-auto m-2">
                        <FontAwesomeIcon icon={faXmark} className="me-2"/>
                        Clear
                    </div>
                </div>

                {listOfVisits}


            </div>


            <br/>
            <br/>
            <br/>
            <br/>


        </ChakraProvider>
    );
}