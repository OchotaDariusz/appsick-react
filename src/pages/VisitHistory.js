import {useEffect, useState} from "react";
import OneVisitHistory from "../components/VisitHistory/OneVisitHistory";
import {formatVisitDate} from "../utils/Utils";


export default function VisitHistory(props) {
    const [visits, setVisits] = useState([])

    const getVisit = async ()=>{
        const data = await fetch(`http://localhost:8080/api/visit/status/completed/${props.match.params.patientId}`, {
            credentials: "include"
        })
        try {
            return await data.json()
        } catch (e) {
            console.log(e.message)
            return data
        }
    }
    useEffect(()=>{
        getVisit(props.match.params.visitId)
            .then(visit=>{
                setVisits(() => {
                    return visit.map(formatVisitDate)
                })

            })
            .catch(err => console.log(err.message))
    })
    return (
        <>
            <div>
                {visits.map(visit => <OneVisitHistory visit={visit} key={visit.visitId}/>)}

            </div>
            <p>cześć</p>
        </>
    )
}