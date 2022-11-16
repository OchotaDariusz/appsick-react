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

    async function getListOfClinics(){
        const clinics = await fetch("http://localhost:8080/api/clinic");
        return clinics.json();
    }

    async function getDoctorsForClinic(clinicId){
        const clinics = await fetch(`http://localhost:8080/api/clinic/${clinicId}/doctor`);
        return clinics.json();
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
        //TODO load visit dates available for the doctor
    }, [visitObject.doctor]);

    const changeClinic = (e) => {
        visitObject.clinic.clinicId = e.target.value;
        setVisitDetails(visitObject);
        console.log(visitDetails)
    }

    return (
        <ChakraProvider>
            <div className="container col-6 mx-auto rounded-5 bg-dark text-dark bg-opacity-10 shadow">
                <form className="row justify-content-center">
                    <label htmlFor={"clinic"}>Clinic:</label>
                    <select id={"clinic-select"} name={"clinic"} className="form-select" onChange={changeClinic} required>
                        <option value="" hidden>- Select Clinic -</option>
                        {clinicList.map(clinic => {
                            return <option key={clinic.clinicId} value={clinic.clinicId}>{clinic.clinicName}</option>;
                        })}
                    </select>
                    <label htmlFor={"doctor"}>Doctor:</label>
                    <select name={"doctor"} required>
                        <option value="" hidden>- Select a Doctor -</option>
                        {doctorList.map(doctor => {
                            return <option key={doctor.doctorId} value={doctor.doctorId}>{doctor.user.firstName} {doctor.user.lastName}</option>;
                        })}
                    </select>
                    <label htmlFor={"date"}>Date:</label>
                    <select name={"date"} required>
                        {}
                    </select>
                    <button type={"submit"}>SUBMIT</button>
                </form>
            </div>
        </ChakraProvider>
    );
};



export default VisitRegistration;

