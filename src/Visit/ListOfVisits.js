import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faCalendarDays,
    faLocationDot,
    faChartLine,
    faPills,
    faXmark,
    faVideo
} from '@fortawesome/free-solid-svg-icons'
import Visit from "./Visit"
import TodayVisit from "./TodayVisit"
import {ChakraProvider} from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.css'


const isToday = (visit) => {
    return new Date(visit.date).getFullYear() === new Date().getFullYear()
        && new Date(visit.date).getMonth() === new Date().getMonth()
        && new Date(visit.date).getDay() === new Date().getDay();
}

const formatVisitDate = visit => {
    visit.date = [new Date(visit.date).toLocaleDateString(), new Date(visit.date).toLocaleTimeString()]
    return visit
}

export default function ListOfVisits() {
    const [currentVisits, setCurrentVisits] = useState([])
    const [pastVisits, setPastVisits] = useState([])
    const [futureVisits, setFutureVisits] = useState([])


    const BASE_URL = "http://localhost:8080/api/visit/patient/"
    const PATIENT_ID = "1"
    const listOfVisitsURL = BASE_URL + PATIENT_ID

    async function getListOfFutureVisits() {
        const data = await fetch(listOfVisitsURL + "/future")
        return data.json()
    }

    async function getListOfPastVisits() {
        const data = await fetch(listOfVisitsURL + "/past")
        return data.json()
    }

    async function getListOfCurrentVisits() {
        const data = await fetch(listOfVisitsURL + "/current")
        return data.json()
    }

    useEffect(() => {
        getListOfFutureVisits()
            .then(visits => {
                visits.sort((a, b) => {
                    let dateA = new Date(a.date);
                    let dateB = new Date(b.date);
                    return dateB - dateA;
                })
                setFutureVisits(() => {
                    let listOfFutureVisits = visits.filter(visit => new Date(visit.date).getTime() > new Date().getTime() && !isToday(visit))
                    return listOfFutureVisits.map(formatVisitDate)
                })

            })
            .catch(err => console.warn(err.message))
    }, [])

    useEffect(() => {
        getListOfPastVisits()
            .then(visits => {
                visits.sort((a, b) => {
                    let dateA = new Date(a.date);
                    let dateB = new Date(b.date);
                    return dateB - dateA;
                })

                setPastVisits(() => {
                    let listOfPastVisits = visits.filter(visit => new Date(visit.date).getTime() < new Date().getTime())
                    return listOfPastVisits.map(formatVisitDate)
                })
            })
            .catch(err => console.warn(err.message))
    }, [])

    useEffect(() => {
        getListOfCurrentVisits()
            .then(visits => {
                visits.sort((a, b) => {
                    let dateA = new Date(a.date);
                    let dateB = new Date(b.date);
                    return dateB - dateA;
                })
                setCurrentVisits(() => {
                    return visits.map(formatVisitDate)
                })
            })
            .catch(err => console.warn(err.message))
    }, [])


    return (
        <>
            <ChakraProvider>
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
                        <br />
                        <br />
                        <div className="row align-items-center">
                            <div className="col-auto my-3 mx-2 container bg-white border-2 border-opacity-75 border-dark border rounded text-center">
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

                    {pastVisits.map(visit => <Visit visit={visit} key={visit.visitId}/>)}

                </div>


                <br/>
                <br/>
                <br/>
                <br/>
            </ChakraProvider>
        </>

    );
}