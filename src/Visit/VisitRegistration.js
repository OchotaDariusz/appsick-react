import React, { useState, useEffect } from 'react'
import { ChakraProvider, Select } from '@chakra-ui/react'

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
            "reason": "Cancer",
            "status": "PENDING"
        }

    const [visitDetails, setVisitDetails] = useState(visitObject)
    const [clinicList, setClinicList] = useState([])
    const [doctorList, setDoctorList] = useState([])
    const [visitDateList, setVisitDateList] = useState([])

    async function getListOfClinics(){
        const clinics = await fetch("http://localhost:8080/api/clinic");
        return clinics.json();
    }

    async function getDoctorsForClinic(clinicId){
        const clinics = await fetch(`http://localhost:8080/api/clinic/${clinicId}/doctor`);
        return clinics.json();
    }

    async function getAvailableDatesForDoctor(doctorId){
        // TODO: backend logic
        if (doctorId === 0){
            return []
        }
        return ['2022-12-6T14:30:00', '2023-4-20T10:45:00'];
    }

    async function postVisit(){
        const response = await fetch(`http://localhost:8080/api/visit`, {method: "POST", body: visitDetails})
        return response;
    }

    useEffect(() =>{
        getListOfClinics().then(clinics => {
            setClinicList( () => {return clinics} );
        })
            .catch(err => console.warn(err.message))
    }, [])

    useEffect(() => {
        getDoctorsForClinic(visitDetails.clinic.clinicId).then(doctors => {
            setDoctorList(() => {return doctors});
        })
            .catch(err => console.warn(err.message))
    }, [visitDetails.clinic.clinicId]);

    useEffect(() => {
        getAvailableDatesForDoctor(visitDetails.doctor.doctorId).then(dates => {
            setVisitDateList(() => {return dates})
        })
            .catch(err => console.warn(err.message))
    }, [visitDetails.doctor.doctorId]);

    const changeClinic = (e) => {
        visitObject = {...visitDetails};
        visitObject.clinic.clinicId = e.target.value;
        setVisitDetails(visitObject);
    }

    const changeDoctor = (e) => {
        visitObject = {...visitDetails};
        visitObject.doctor.doctorId = e.target.value;
        setVisitDetails(visitObject);
    }

    const changeVisitDate = async (e) => {
        visitObject = {...visitDetails};
        visitObject.date = e.target.value;
        setVisitDetails(visitObject);
    }

    const submitVisit = (e) => {
        const form = document.getElementById("visit-form")
        if (!form.checkValidity()) {
            console.log("Form invalid")
            // TODO: informative pop-up
            return;
        }
        e.preventDefault();
        console.log("POSTING")
        postVisit().then(response => console.log(response))
            .catch(err => console.warn(err.message));
    }

    return (
        <ChakraProvider>
            <div className="container col-6 mx-auto rounded-5 bg-dark text-dark bg-opacity-10 shadow">
                <form id={"visit-form"} className="row justify-content-center">
                    <label htmlFor={"clinic"}>Clinic:</label>
                    <select name={"clinic"} className="form-select" onChange={changeClinic} required>
                        <option value="" hidden>- Select Clinic -</option>
                        {clinicList.map(clinic => {
                            return <option key={clinic.clinicId} value={clinic.clinicId}>{clinic.clinicName}</option>;
                        })}
                    </select>
                    <label htmlFor={"doctor"}>Doctor:</label>
                    <select name={"doctor"} className={"form-select"} onChange={changeDoctor} required>
                        <option value="" hidden>- Select a Doctor -</option>
                        {doctorList.map(doctor => {
                            return <option key={doctor.doctorId} value={doctor.doctorId}>{doctor.user.firstName} {doctor.user.lastName}</option>;
                        })}
                    </select>
                    <label htmlFor={"date"}>Date:</label>
                    <select name={"date"} onChange={changeVisitDate} required>
                        <option value="" hidden>- Select a Date -</option>
                        {visitDateList.map(date => {
                            return <option key={date} value={date}>{date}</option>
                        })}
                    </select>
                    <button type={"submit"} onClick={submitVisit}>SUBMIT</button>
                </form>
            </div>
        </ChakraProvider>
    );
};

export default VisitRegistration;
