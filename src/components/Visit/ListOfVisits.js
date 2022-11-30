import React, {useEffect, useRef, useState, useCallback} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendarDays, faChartLine, faLocationDot, faPills, faVideo, faXmark} from '@fortawesome/free-solid-svg-icons'
import Visit from "./Visit"
import TodayVisit from "./TodayVisit"
import 'bootstrap/dist/css/bootstrap.css'
import {List, ListItem} from "@mui/material";
import {isToday, formatVisitDate} from "../../utils/Utils";
import PastVisits from './PastVisits'
import { Spinner } from '@chakra-ui/react'

const BASE_URL = "http://localhost:8080/api/visit/patient/"
const PATIENT_ID = "1"
const listOfVisitsURL = BASE_URL + PATIENT_ID

export default function ListOfVisits() {
    let pageNumber = 2;
    const [currentVisits, setCurrentVisits] = useState([])
    const [pastVisits, setPastVisits] = useState([])
    const [futureVisits, setFutureVisits] = useState([])

    const loadMorePastVisits = useCallback(() => {
        getListOfVisits(`/past?pageNumber=${pageNumber}`)
            .then(visits => {
                pageNumber++;
                setPastVisits(prevVisits => {
                    let listOfPastVisits = visits
                    listOfPastVisits.map(formatVisitDate)
                    return [...prevVisits, ...listOfPastVisits]
                })
            })
            .catch(err => console.warn(err.message))
    }, []);

    async function getListOfVisits(time) {
        const data = await fetch(listOfVisitsURL + time)
        return data.json()
    }



    useEffect(() => {
        getListOfVisits("/future")
            .then(visits => {

                setFutureVisits(() => {
                    return visits.map(formatVisitDate)
                })

            })
            .catch(err => console.warn(err.message))
    }, [])

    useEffect(() => {
        getListOfVisits("/past")
            .then(visits => {
                setPastVisits(() => {
                    return visits.map(formatVisitDate)
                })
            })
            .catch(err => console.warn(err.message))
    }, [])

    useEffect(() => {
        getListOfVisits("/current")
            .then(visits => {
                setCurrentVisits(() => {
                    return visits.map(formatVisitDate)
                })
            })
            .catch(err => console.warn(err.message))
    }, [])

    return (
        <div>
            <div className="container col-6 mx-auto rounded-5 bg-dark text-dark bg-opacity-10 shadow">
                    <div className="row justify-content-center">
                        <div className="col-2"></div>
                        <div className="col fs-3 ">Incoming</div>
                    </div>
                    <div className="row align-items-center">

                        {futureVisits.map(visit => <Visit visit={visit} key={visit.visitId}/>)}
                        <div className="">
                            <hr/>
                        </div>
                        <br/>
                        <br/>
                        <div className="row align-items-center">
                            <div
                                className="col-auto my-3 mx-2 container bg-white border-2 border-opacity-75 border-dark border rounded text-center">
                                Today's <br/>visits:
                            </div>

                            <div className="container col-9">
                                {currentVisits.length > 0 ?
                                    currentVisits.map(visit => <TodayVisit visit={visit} key={visit.visitId}/>) :
                                    "You do not have appointments planned for today."
                                }
                            </div>
                        </div>

                    </div>

                    <br/>
                    <hr/>
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
                        <div className="col-auto rounded-5 bg-white m-2 shadow-sm">
                            <FontAwesomeIcon icon={faLocationDot} className="me-2"/>
                            Visits
                        </div>
                        <div className="col-auto rounded-5 bg-white m-2 shadow-sm">
                            <FontAwesomeIcon icon={faChartLine} className="me-2"/>
                            Examinations
                        </div>
                        <div className="col-auto rounded-5 bg-white m-2 shadow-sm">
                            <FontAwesomeIcon icon={faPills} className="me-2"/>
                            Prescriptions
                        </div>
                        <div className="col-auto rounded-5 bg-white m-2 shadow-sm ">
                            <FontAwesomeIcon icon={faVideo} className="me-2"/>
                            Video calls
                        </div>
                        <div className="col-auto m-2 shadow-sm">
                            <FontAwesomeIcon icon={faXmark} className="me-2"/>
                            Clear
                        </div>
                    </div>

                <PastVisits pastVisits={pastVisits} loadMorePastVisits={loadMorePastVisits}/>

            </div>


            <br/>
            <br/>
            <br/>
            <br/>

        </div>

    );
}