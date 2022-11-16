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
            "reason": "",
            "status": "PENDING"
        }

    const [visitDetails, setVisitDetails] = useState(visitObject)
    const [clinicList, setClinicList] = useState([])
    const [doctorList, setDoctorList] = useState([])
    const [visitDateList, setVisitDateList] = useState([])

    const BASE_URL = "";

    async function getListOfClinics(){
        const clinics = await fetch("http://localhost:8080/api/clinic");
        return clinics.json();
    }

    useEffect(() =>{
        getListOfClinics().then(clinics => {
            setClinicList( () => {return clinics} );
        })
            .catch(err => console.warn(err.message))
    }, [])

    useEffect(() => {
        // TODO load doctors available for the clinic
    }, [visitObject.clinic])

    useEffect(() => {
        //TODO load visit dates available for the doctor
    }, [visitObject.doctor]);


    const ClinicOption = (props) => {
        return (
            <option onClick={() => {console.log("DUPA")} }>{props.name}</option>
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

    return (
        <ChakraProvider>
            <div className="container col-6 mx-auto rounded-5 bg-dark text-dark bg-opacity-10 shadow">
                <form className="row justify-content-center">
                    <label htmlFor={"clinic"}>Clinic:</label>
                    <select name={"clinic"} className="form-select">
                        <option value="" hidden>- Select Clinic -</option>
                        {clinicList.map(clinic => <ClinicOption key={clinic.clinicId} name={clinic.clinicName}/>)}
                    </select>
                    <label htmlFor={"doctor"}>Doctor:</label>
                    <select name={"doctor"}>
                        {}
                    </select>
                    <label htmlFor={"date"}>Date:</label>
                    <select name={"date"}>
                        {}
                    </select>
                </form>
            </div>
        </ChakraProvider>
    );
};



export default VisitRegistration;

