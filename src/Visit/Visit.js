import React, {useState, useEffect} from "react"
import {ChakraProvider} from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendarDays, faLocationDot, faChartLine, faPills, faXmark, faVideo} from '@fortawesome/free-solid-svg-icons'
import Collapse from 'react-bootstrap/Collapse';
import {forEach} from "react-bootstrap/ElementChildren";

export default function Visit() {
    // Rozsuwane See Details
    const [open, setOpen] = useState(false);
    const BASE_URL = "http://localhost:8080/api/visit/patient/"
    const PATIENT_ID = "1"
    const listOfVisitsURL = BASE_URL + PATIENT_ID

    const [listOfVisits, setListsOfVisits] = useState()

    async function getList(listOfVisitsURL) {
        await fetch(listOfVisitsURL)
            .then(res => res.json())
            .then((res) => {
                setListsOfVisits(res)
                console.warn("!")
                console.log(res)

                res.forEach(v => console.log(v))

                // setListsOfVisits(newListOfVisits)
            })
    }

        useEffect(() => {
                getList(listOfVisitsURL).then(r => console.log("RRRRRR" + r))

            }
        )

        return (
            <React.Fragment>

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
            </React.Fragment>

        );
    }