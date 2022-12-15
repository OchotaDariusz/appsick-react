import React, {useEffect, useState} from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import {useHistory} from "react-router-dom";
import { Spinner } from '@chakra-ui/react'
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';

const VisitRegistration = () => {

    const ONLINE_CLINIC_ID = 1; // TODO discuss. Maybe id should be nullable

    let visitObject = {
            "clinic": {
                "clinicId": ONLINE_CLINIC_ID
            },
            "date": "2022-11-14T19:57:07.153Z",
            "doctor": {
                "doctorId": 0
            },
            "doctorSpeciality": "",
            "online": true,
            "patient": {
                "patientId": 1 // TODO: fetch data
            },
            "reason": "",
            "status": "PENDING"
        }

    const [visitDetails, setVisitDetails] = useState(visitObject)
    const [clinicList, setClinicList] = useState([])
    const [doctorList, setDoctorList] = useState([])
    const [doctorSpecialities, setDoctorSpecialities] = useState([])
    const [isClinicListLoading, setIsClinicListLoading] = useState(true)
    const [isDoctorListLoading, setIsDoctorListLoading] = useState(true)
    const [isDoctorSpecialitiesLoading, setIsDoctorSpecialitiesLoading] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const history = useHistory();

    async function getDoctorSpecialities(){
        setIsDoctorSpecialitiesLoading(true)
        const specialties = await fetch(`http://localhost:8080/api/doctor/specialities`, {
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }).then((response) => {
            setIsDoctorSpecialitiesLoading(false);
            return response;
        });
        return specialties.json();
    }

    async function getListOfClinics(){
        setIsClinicListLoading(true);
        const clinics = await fetch(`http://localhost:8080/api/clinic`, {
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(response => {
            setIsClinicListLoading(false);
            return response;
        });
        return clinics.json();
    }

    async function getDoctorsForClinic(clinicId){
        setIsDoctorListLoading(true);
        const doctors = await fetch(`http://localhost:8080/api/clinic/${clinicId}/doctor`, {
            method: "GET",
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(response => {
            setIsDoctorListLoading(false);
            return response;
        });
        return doctors.json();
    }

    async function getDoctorsForSpeciality(speciality){
        setIsDoctorListLoading(true);
        const doctors = await fetch(`http://localhost:8080/api/doctor/specialities/${speciality}`, {
            method: "GET",
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(response => {
            setIsDoctorListLoading(false);
            return response;
        });
        return doctors.json();
    }

    async function postVisit(){
        return await fetch(`http://localhost:8080/api/visit`, {
            method: "POST",
            body: JSON.stringify(visitDetails),
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    }

    async function checkUserLoggedIn(){
        return; // TODO
    }

    useEffect(() =>{
        getDoctorSpecialities().then(doctorSpecialities => {
            if (doctorSpecialities) {
                setDoctorSpecialities(() => {return doctorSpecialities});
            }
        }).catch(err => console.warn(err.message))
    }, [])

    useEffect(() =>{
        getListOfClinics().then(clinics => {
            if (clinics){
                setClinicList( () => {return clinics} );
            }
        }).catch(err => console.warn(err.message))
    }, [])

    useEffect(() => {
        getDoctorsForClinic(visitDetails.clinic.clinicId).then(doctors => {
            if (doctors){
                setDoctorList(() => {return doctors});
            }
        })
            .catch(err => console.warn(err.message))
    }, [visitDetails.clinic.clinicId]);

    useEffect(() => {
        if (visitDetails.doctorSpeciality === "") { return; }
        getDoctorsForSpeciality(visitDetails.doctorSpeciality).then( doctors => {
            if (doctors){
                setDoctorList(() => {return doctors});
            }
        })
            .catch(err => console.warn(err.message))
    }, [visitDetails.doctorSpeciality])

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

    const changeVisitDate = (e) => {
        visitObject = {...visitDetails};
        visitObject.date = e.target.value;
        setVisitDetails(visitObject);
    }

    const changeVisitDescription = (e) => {
        visitObject = {...visitDetails};
        visitObject.reason = e.target.value;
        setVisitDetails(visitObject);
    }

    const changeDoctorSpeciality = (e) => {
        visitObject = {...visitDetails};
        visitObject.doctorSpeciality = e.target.value;
        setVisitDetails(visitObject);
    }

    const toggleOnline = (e) => {
        visitObject = {...visitDetails};
        visitObject.online = e.target.value === "true";
        if (e.target.value === "true") {visitObject.clinic.clinicId = ONLINE_CLINIC_ID}
        setVisitDetails(visitObject);
    }


    const submitVisit = (e) => {
        const form = document.getElementById("visit-form")
        if (!form.checkValidity()) {
            console.log("Form invalid")
            // TODO: informative pop-up
            return;
        }
        if (isSubmitting) { return; }
        setIsSubmitting(true);
        e.preventDefault();
        postVisit().then(response => console.log(response))
            .then(() => history.push("/visit"))
            .catch(err => console.warn(err.message))
            .finally(() => setIsSubmitting(false));
    }

    function onlineVisitForm(){
        return (
            <form id={"visit-form"} className="row justify-content-center">
                <label htmlFor={"doctor"}>Doctor:</label>
                <Select name={"doctor"} className={"form-select"} onChange={changeDoctor} required>
                    <option value="" hidden>- Select a Doctor -</option>
                    {isDoctorListLoading ? "loading" : doctorList.map(doctor => {
                        return <option key={doctor.doctorId}
                                       value={doctor.doctorId}>{doctor.user.firstName} {doctor.user.lastName}</option>;
                    })
                    }
                </Select>
                <label htmlFor={"date"}>Date:</label>
                <input type={"datetime-local"} name={"date"} onChange={changeVisitDate} required/>

                <div className="form-group info-border">
                    <label htmlFor="visit-description">Visit description:</label>
                    <Textarea className="form-control" name={"visit-description"} rows="5"
                              onChange={changeVisitDescription}></Textarea>
                </div>

                <button type={"submit"} onClick={submitVisit}>SUBMIT</button>
            </form>
        )
    }

    function clinicVisitForm(){
        return (
            <form id={"visit-form"} className="row justify-content-center">
                <label htmlFor={"clinic"}>Clinic:</label>
                <Select name={"clinic"} className="form-select" onChange={changeClinic} required>
                    <option value="" hidden>- Select Clinic -</option>
                    {isClinicListLoading ? "loading" : clinicList.map(clinic => {
                        return <option key={clinic.clinicId} value={clinic.clinicId}>{clinic.clinicName}</option>;
                    })
                    }
                </Select>
                <label htmlFor={"doctor"}>Doctor:</label>
                <Select name={"doctor"} className={"form-select"} onChange={changeDoctor} required>
                    <option value="" hidden>- Select a Doctor -</option>
                    {isDoctorListLoading ? "loading" : doctorList.map(doctor => {
                        return <option key={doctor.doctorId}
                                       value={doctor.doctorId}>{doctor.user.firstName} {doctor.user.lastName}</option>;
                    })
                    }
                </Select>
                <label htmlFor={"date"}>Date:</label>
                <input type={"datetime-local"} name={"date"} onChange={changeVisitDate} required/>

                <div className="form-group info-border">
                    <label htmlFor="visit-description">Visit description:</label>
                    <textarea className="form-control" name={"visit-description"} rows="5"
                              onChange={changeVisitDescription}></textarea>
                </div>

                <button type={"submit"} onClick={submitVisit}>SUBMIT</button>
            </form>
        )
    }
    return (
        <>
            <div className={"container-fluid col-lg-6 col-md-12 col-sm-12 mx-auto rounded-5 bg-light text-dark  mt-3 green-shadow"}>

                <div className={"container mx-auto m-3 m- p-3"}>
                    <label className={"p-3"} htmlFor={"specialities"}>Speciality:</label>
                    <Select name={"specialities"} className={"form-select"} onChange={changeDoctorSpeciality} required>
                        <option value="" hidden>- Select a Speciality -</option>
                        {isDoctorSpecialitiesLoading ? "loading" : doctorSpecialities.map(speciality => {
                            return <option key={speciality}
                                           value={speciality}>{speciality}</option>;
                        })
                        }
                    </Select>
                </div>

                <nav className={"align-items-center"}>
                    <div className={"nav nav-tabs nav-fill"} id="nav-tab" role="tablist">

                        <button className={"nav-link active"} data-bs-toggle={"tab"} id={"nav-online-tab"}
                                data-bs-target={"#nav-online"} type={"button"} role={"tab"}
                                aria-controls={"nav-online"} aria-selected={"true"}
                                onClick={toggleOnline} value={"true"}>Online consultation</button>

                        <button className={"nav-link"} data-bs-toggle={"tab"} id={"nav-clinic-tab"}
                                data-bs-target={"#nav-clinic"} type={"button"} role={"tab"}
                                aria-controls={"nav-clinic"} aria-selected={"false"}
                                onClick={toggleOnline}>Meet in person</button>

                    </div>
                </nav>

                <div className={"tab-content"} id={"nav-tabContent"}>

                    <div className={"tab-pane fade show active p-3"} id={"nav-online"} role={"tabpanel"}
                         aria-labelledby={"nav-online-tab"}>
                        {onlineVisitForm()}
                    </div>

                    <div className={"tab-pane fade p-3"} id={"nav-clinic"} role={"tabpanel"}
                         aria-labelledby={"nav-clinic-tab"}>
                        {clinicVisitForm()}
                    </div>

                </div>
            </div>
        </>
    );
};

export default VisitRegistration;
