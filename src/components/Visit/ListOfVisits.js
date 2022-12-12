import React, {useCallback, useEffect, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendarDays, faChartLine, faLocationDot, faPills, faVideo, faXmark} from '@fortawesome/free-solid-svg-icons'
import Visit from "./Visit"
import TodayVisit from "./TodayVisit"
import 'bootstrap/dist/css/bootstrap.css'
import {formatVisitDate, isToday} from "../../utils/Utils";
import PastVisits from './PastVisits'
import {Spinner} from '@chakra-ui/react'
import BackToTopBtn from "../BackToTopBtn/BackToTopBtn";

const BASE_URL = `http://localhost:8080/api/visit/patient/`
const PATIENT_ID = "1"
const listOfVisitsURL = BASE_URL + PATIENT_ID

export default function ListOfVisits() {

    let pageNumber = 2;
    const [currentVisits, setCurrentVisits] = useState([])
    const [pastVisits, setPastVisits] = useState([])
    const [futureVisits, setFutureVisits] = useState([])

    const [isCurrentVisitsLoading, setIsCurrentVisitsLoading] = useState(true);
    const [isPastVisitsLoading, setIsPastVisitsLoading] = useState(true);
    const [isFutureVisitsLoading, setIsFutureVisitsLoading] = useState(true);

    const [isLocal, setIsLocal] = useState(false)
    const [isOnline, setIsOnline] = useState(false)
    const [isExamination, setIsExamination] = useState(false)
    const [isPrescription, setIsPrescription] = useState(false)
    let local = ""
    let online = ""
    let examination = ""
    let prescription = ""

    const [localFilterButtonClasses, setLocalFilterButtonClasses] = useState("col-auto rounded-5 bg-dark m-1 shadow-sm nvbr")
    const [onlineFilterButtonClasses, setOnlineFilterButtonClasses] = useState("col-auto rounded-5 bg-dark m-1 shadow-sm nvbr")
    const [examinationFilterButtonClasses, setExaminationFilterButtonClasses] = useState("col-auto rounded-5 bg-dark m-1 shadow-sm nvbr")
    const [prescriptionFilterButtonClasses, setPrescriptionFilterButtonClasses] = useState("col-auto rounded-5 bg-dark m-1 shadow-sm nvbr")


    const [isFiltered, setIsFiltered] = useState(false)

    useEffect(() => {
        if (!isLocal) {
            local = ""
            setLocalFilterButtonClasses("col-auto rounded-5 bg-white m-1 shadow-sm nvbr")
        } else {
            local = "&visitType=0"
            setLocalFilterButtonClasses("col-auto rounded-5 bg-white m-1 shadow-sm nvbr border border-dark border-2")
        }
    }, [isLocal])

    useEffect(() => {
        if (!isOnline) {
            online = ""
            setOnlineFilterButtonClasses("col-auto rounded-5 bg-white m-1 shadow-sm nvbr")
        } else {
            online = "&visitType=1"
            setOnlineFilterButtonClasses("col-auto rounded-5 bg-white m-1 shadow-sm nvbr border border-dark border-2")
        }
    }, [isOnline])

    useEffect(() => {
        if (!isExamination) {
            examination = ""
            setExaminationFilterButtonClasses("col-auto rounded-5 bg-white m-1 shadow-sm nvbr")
        } else {
            examination = "&visitType=2"
            setExaminationFilterButtonClasses("col-auto rounded-5 bg-white m-1 shadow-sm nvbr border border-dark border-2")
        }
    }, [isExamination])

    useEffect(() => {
        if (!isPrescription) {
            prescription = ""
            setPrescriptionFilterButtonClasses("col-auto rounded-5 bg-white m-1 shadow-sm nvbr")
        } else {
            prescription = "&visitType=3"
            setPrescriptionFilterButtonClasses("col-auto rounded-5 bg-white m-1 shadow-sm nvbr border border-dark border-2")
        }
    }, [isPrescription])


    const loadMorePastVisits = useCallback(() => {
        getListOfVisits(`/past?pageNumber=${pageNumber}${local}${online}${examination}${prescription}`)
            .then(visits => {
                console.log(`/past?pageNumber=${pageNumber}${local}${online}${examination}${prescription}`)
                pageNumber++;


                // TODO: remove timeout
                setTimeout(() => {
                    setPastVisits(portionOfPastVisits => {
                        let listOfPastVisits = visits
                        listOfPastVisits.map(formatVisitDate)
                        return [...portionOfPastVisits, ...listOfPastVisits]
                    })
                }, 2000)

            })
            .catch(err => console.warn(err.message))
    }, []);

    async function getListOfVisits(time) {
        const data = await fetch(listOfVisitsURL + time, {
            mode: 'cors',
            credentials: "include",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        return await data.json()
    }

    const cancelVisit = visitId => {
        console.log(visitId)
        fetch(`http://localhost:8080/api/visit/${visitId}`, {
            credentials: "include",
            method: "DELETE"
        })
            .then(() => {
                setIsFutureVisitsLoading(false)
            })
            .catch(err => console.log(err.message))
    }

    useEffect(() => {
        getListOfVisits("/future")
            .then(visits => {
                if (visits.status !== 401) {
                    let filtered = visits.filter(visit => !isToday(visit))
                    setFutureVisits(() => {
                        return filtered.map(formatVisitDate)
                    })
                    setIsFutureVisitsLoading(false)
                }
            })
            .catch(err => console.warn(err.message))
    }, [isFutureVisitsLoading])

    useEffect(() => {
        getListOfVisits("/current")
            .then(visits => {
                if (visits.status !== 401) {
                    setCurrentVisits(() => {
                        return visits.map(formatVisitDate)
                    })
                    setIsCurrentVisitsLoading(false)
                }
            })
            .catch(err => console.warn(err.message))
    }, [])

    useEffect(() => {
        let pastVisitsUrl = (!isFiltered) ? "/past" : `/past?pageNumber=1${local}${online}${examination}${prescription}`
        getListOfVisits(pastVisitsUrl)
            .then(visits => {
                if (visits.status !== 401) {
                    setPastVisits(() => {
                        return visits.map(formatVisitDate)
                    })
                    setIsPastVisitsLoading(false)
                }
            })
            .catch(err => console.warn(err.message))
    }, [isLocal, isOnline, isExamination, isPrescription])

    return (
        <div>
            <div className="container-fluid col-6 mx-auto rounded-5 bg-light text-dark  mt-3 green-shadow">
                <div className="row justify-content-center">
                    <div className="col-2"></div>
                    <div className="col fs-3 mt-3">Incoming</div>
                </div>
                {(isFutureVisitsLoading) ? <Spinner/> : futureVisits.map(visit => <Visit visit={visit}
                                                                                         cancelVisit={cancelVisit}
                                                                                         key={visit.visitId}/>)}
                <div className="row align-items-center">

                    <div>
                        <hr/>
                    </div>
                    <br/>
                    <br/>
                    <div className="row align-items-center">
                        <div className="col-2 px-2">
                            <div className=" my-3 mx-2  bg-white border-2 border-opacity-75 border-dark border rounded text-center">
                                Today's <br/>visits:
                            </div>
                        </div>

                        <div className="container col-9">
                            {currentVisits.length > 0 ?
                                (isCurrentVisitsLoading) ? <Spinner/> : currentVisits.map(visit => <TodayVisit
                                    visit={visit}
                                    key={visit.visitId}/>) :
                                <div
                                    className="col-12 container border-2 border-dark border-opacity-75 border rounded-3 bg-white text-dark my-3 p-3">
                                    You do not have appointments planned for today.
                                </div>
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
                    <button className="col-auto rounded-5 bg-white m-1 shadow-sm nvbr">
                        <FontAwesomeIcon icon={faCalendarDays} className="me-1"/>
                        Data
                    </button>
                    <button className={localFilterButtonClasses}
                            onClick={() => {
                                setIsLocal(!isLocal)
                                setIsFiltered(isFiltered)
                            }}>
                        <FontAwesomeIcon icon={faLocationDot} className="me-1"/>
                        Local
                    </button>
                    <button className={onlineFilterButtonClasses}
                            onClick={() => {
                                setIsOnline(!isOnline)
                                setIsFiltered(isFiltered)
                            }}>
                        <FontAwesomeIcon icon={faVideo} className="me-1"/>
                        Online
                    </button>
                    <button className={examinationFilterButtonClasses}
                            onClick={() => {
                                setIsExamination(!isExamination)
                                setIsFiltered(isFiltered)
                            }}>
                        <FontAwesomeIcon icon={faChartLine} className="me-1"/>
                        Examinations
                    </button>
                    <button className={prescriptionFilterButtonClasses}
                            onClick={() => {
                                setIsPrescription(!isPrescription)
                                setIsFiltered(isFiltered)
                            }}>
                        <FontAwesomeIcon icon={faPills} className="me-1"/>
                        Prescriptions
                    </button>
                    <button className="col-auto m-2"
                            onClick={() => {
                                setIsFiltered(false)
                                setIsLocal(false)
                                setIsOnline(false)
                                setIsExamination(false)
                                setIsPrescription(false)
                            }}>
                        <FontAwesomeIcon icon={faXmark} className="me-1"/>
                        Clear filters
                    </button>

                </div>

                {(isPastVisitsLoading) ? <div className="d-flex justify-content-center"><Spinner/></div> :
                    <PastVisits pastVisits={pastVisits} loadMorePastVisits={loadMorePastVisits}/>}

            </div>


            <br/>
            <br/>
            <br/>
            <br/>
            <BackToTopBtn/>
        </div>

    );
}