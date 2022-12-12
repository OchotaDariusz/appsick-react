import React, {useEffect, useState} from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import {useHistory} from "react-router-dom";
import { Spinner } from '@chakra-ui/react'
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';

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
                'Access-Control-Allow-Origin': '*',
                'Cache': 'no-cache'
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
                'Access-Control-Allow-Origin': '*',
                'Cache': 'no-cache'
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
            redirect: 'follow',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Cache': 'no-cache'
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
            redirect: 'follow',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Cache': 'no-cache'
            }
        });
    }

    useEffect(() =>{
        getDoctorSpecialities().then(doctorSpecialities => {
            setDoctorSpecialities(() => {return doctorSpecialities});
        }).catch(err => console.warn(err.message))
    }, [])

    useEffect(() =>{
        getListOfClinics().then(clinics => {
            setClinicList( () => {return clinics} );
        }).catch(err => console.warn(err.message))
    }, [])

    useEffect(() => {
        getDoctorsForClinic(visitDetails.clinic.clinicId).then(doctors => {
            setDoctorList(() => {return doctors});
        })
            .catch(err => console.warn(err.message))
    }, [visitDetails.clinic.clinicId]);

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

    const toggleOnline = (e) => {
        visitObject = {...visitDetails};
        visitObject.online = !visitDetails.online;
        setVisitDetails(visitObject);
        console.log(visitObject.online)
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
                <select name={"doctor"} className={"form-select"} onChange={changeDoctor} required>
                    <option value="" hidden>- Select a Doctor -</option>
                    {isDoctorListLoading ? "loading" : doctorList.map(doctor => {
                        return <option key={doctor.doctorId}
                                       value={doctor.doctorId}>{doctor.user.firstName} {doctor.user.lastName}</option>;
                    })
                    }
                </select>
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

    function clinicVisitForm(){
        return (
            <form id={"visit-form"} className="row justify-content-center">
                <label htmlFor={"clinic"}>Clinic:</label>
                <select name={"clinic"} className="form-select" onChange={changeClinic} required>
                    <option value="" hidden>- Select Clinic -</option>
                    {isClinicListLoading ? "loading" : clinicList.map(clinic => {
                        return <option key={clinic.clinicId} value={clinic.clinicId}>{clinic.clinicName}</option>;
                    })
                    }
                </select>
                <label htmlFor={"doctor"}>Doctor:</label>
                <select name={"doctor"} className={"form-select"} onChange={changeDoctor} required>
                    <option value="" hidden>- Select a Doctor -</option>
                    {isDoctorListLoading ? "loading" : doctorList.map(doctor => {
                        return <option key={doctor.doctorId}
                                       value={doctor.doctorId}>{doctor.user.firstName} {doctor.user.lastName}</option>;
                    })
                    }
                </select>
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
            <div className={"container col-6 mx-auto rounded-5 bg-dark text-dark bg-opacity-10 shadow"}>

                <div className={"container mx-auto m-3 m- p-3"}>
                    <label className={"p-3"} htmlFor={"specialities"}>Speciality:</label>
                    <select name={"specialities"} className={"form-select"} onChange={changeDoctor} required>
                        <option value="" hidden>- Select a Speciality -</option>
                        {isDoctorSpecialitiesLoading ? "loading" : doctorSpecialities.map(speciality => {
                            return <option key={speciality}
                                           value={speciality.doctorId}>{speciality}</option>;
                        })
                        }
                    </select>
                </div>

                <nav className={"align-items-center"}>
                    <div className={"nav nav-tabs nav-fill"} id="nav-tab" role="tablist">

                        <button className={"nav-link active"} data-bs-toggle={"tab"} id={"nav-online-tab"}
                                data-bs-target={"#nav-online"} type={"button"} role={"tab"}
                                aria-controls={"nav-online"} aria-selected={"true"}>Online consultation</button>

                        <button className={"nav-link"} data-bs-toggle={"tab"} id={"nav-clinic-tab"}
                                data-bs-target={"#nav-clinic"} type={"button"} role={"tab"}
                                aria-controls={"nav-clinic"} aria-selected={"false"}>Meet in person</button>

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


// function dupa() {
//
//     return (
//         <ChakraProvider>
//             <div className="container col-6 mx-auto rounded-5 bg-dark text-dark bg-opacity-10 shadow">
//                 <form id={"visit-form"} className="row justify-content-center">
//                     <label htmlFor={"clinic"}>Clinic:</label>
//                     <select name={"clinic"} className="form-select" onChange={changeClinic} required>
//                         <option value="" hidden>- Select Clinic -</option>
//                         {isClinicListLoading ? "loading" : clinicList.map(clinic => {
//                             return <option key={clinic.clinicId} value={clinic.clinicId}>{clinic.clinicName}</option>;
//                         })
//                         }
//                     </select>
//                     <label htmlFor={"doctor"}>Doctor:</label>
//                     <select name={"doctor"} className={"form-select"} onChange={changeDoctor} required>
//                         <option value="" hidden>- Select a Doctor -</option>
//                         {isDoctorListLoading ? "XD" : doctorList.map(doctor => {
//                             return <option key={doctor.doctorId}
//                                            value={doctor.doctorId}>{doctor.user.firstName} {doctor.user.lastName}</option>;
//                         })
//                         }
//                     </select>
//                     <label htmlFor={"date"}>Date:</label>
//                     <input type={"datetime-local"} name={"date"} onChange={changeVisitDate} required/>
//
//                     <div className="form-group info-border">
//                         <label htmlFor="visit-description">Visit description:</label>
//                         <textarea className="form-control" name={"visit-description"} rows="5"
//                                   onChange={changeVisitDescription}></textarea>
//                     </div>
//
//                     <label htmlFor={"online"}>Online visit:</label>
//                     <input type={"checkbox"} name={"online"} onToggle={toggleOnline}/>
//
//                     <button type={"submit"} onClick={submitVisit}>SUBMIT</button>
//                 </form>
//             </div>
//         </ChakraProvider>
//     )
//
// }