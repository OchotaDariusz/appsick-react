import React, { useState, useEffect } from 'react'

const VisitRegistration = () => {
    let visitObject = {
            "clinic": {
                "clinicId": 0
            },
            "date": "2022-11-14T19:57:07.153Z",
            "doctor": {
                "doctorId": 0
            },
            "online": false,
            "patient": {
                "patientId": 1 // TODO: fetch data
            },
            "reason": "",
            "status": "PENDING"
        }

    const [visitDetails, setVisitDetails] = useState(visitObject)
    const [clinicList, setClinicList] = useState([])
    const [doctorList, setDoctorList] = useState([])
    const [visitDateList, setVisitDateList] = useState([])

    const BASE_URL = "http://localhost:8080/api";

    async function getListOfClinics(){
        const clinics = await fetch(BASE_URL + "/clinic");
        return clinics.json();
    }

    return (
        <div className="container col-6 mx-auto rounded-5 bg-dark text-dark bg-opacity-10 shadow">
            <form className="row justify-content-center">
                <label htmlFor={"clinic"}>Clinic:</label>
                <select name={"clinic"}>
                    {}
                </select>
                <label htmlFor={"doctor"}>Doctor:</label>
                <select name={"doctor"}>
                    {}
                </select>
                <label htmlFor={"date"}>Doctor:</label>
                <select name={"date"}>
                    {}
                </select>
            </form>
        </div>
    );
};

const clinicOption = (option) => {
    return (
        <option>{option}</option>
    )
}
const doctorOption = (option) => {
    return (
        <option>{option}</option>
    )
}
const visitDateOption = (option) => {
    return (
        <option>{option}</option>
    )
}

export default VisitRegistration;

