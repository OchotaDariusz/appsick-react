import React, {useEffect, useState} from 'react';
import {Select, Textarea, Spinner} from '@chakra-ui/react';
import {useHistory} from "react-router-dom";
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import './VisitRegistration.css';
import {RiSendPlaneLine} from "react-icons/ri";
import {useDispatch} from "react-redux";
import {showModal} from "../redux/ducks/loginModal";
import {useToast} from "@chakra-ui/react";
import {getUser, getPatient} from "../components/Auth/Auth";

let tokenClient
const VisitRegistration = () => {

    const ONLINE_CLINIC_ID = 1; // TODO discuss. Maybe id should be nullable

    let visitObject = {
        "clinic": {
            "clinicId": ONLINE_CLINIC_ID
        },
        "date": "",
        "doctor": {
            "doctorId": null
        },
        "doctorSpeciality": "",
        "online": true,
        "patient": {
            "patientId": null
        },
        "reason": "",
        "status": "PENDING"
    }

    const [userDetails, setUserDetails] = useState(null)
    const [visitDetails, setVisitDetails] = useState(visitObject)
    const [clinicList, setClinicList] = useState([])
    const [doctorList, setDoctorList] = useState([])
    const [doctorSpecialities, setDoctorSpecialities] = useState([])
    const [isClinicListLoading, setIsClinicListLoading] = useState(true)
    const [isDoctorListLoading, setIsDoctorListLoading] = useState(true)
    const [isDoctorSpecialitiesLoading, setIsDoctorSpecialitiesLoading] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const toast = useToast()

    async function getDoctorSpecialities() {
        setIsDoctorSpecialitiesLoading(true)
        const specialties = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/doctor/specialities`, {
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
        return specialties.json();
    }

    async function getListOfClinics() {
        setIsClinicListLoading(true);
        const clinics = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/clinic`, {
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
        return clinics.json();
    }

    async function getDoctorsForClinic(clinicId) {
        setIsDoctorListLoading(true);
        const doctors = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/clinic/${clinicId}/doctor`, {
            method: "GET",
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
        return doctors.json();
    }

    async function getDoctorsForSpeciality(speciality) {
        setIsDoctorListLoading(true);
        const doctors = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/doctor/specialities/${speciality}`, {
            method: "GET",
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
        return doctors.json();
    }

    async function postVisit() {
        const visitData = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/visit`, {
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
        return await visitData.json()
    }

    useEffect(() => {
        const handleAuthClick = () => {
            // eslint-disable-next-line no-undef
            if (gapi && tokenClient) {
                // eslint-disable-next-line no-undef
                if (gapi.client.getToken() === null) {
                    tokenClient.requestAccessToken({ prompt: "consent" });
                } else {
                    tokenClient.requestAccessToken({
                        prompt: "",
                    });
                }
            } else {
                console.error("Error: gapi not loaded");
                new Error("Error: gapi not loaded");
            }
        }
        const initGapiClient = () => {
            // eslint-disable-next-line no-undef
            gapi.client
                .init({
                    apiKey: process.env.REACT_APP_GOOGLE_APP_ID,
                    discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
                })
                .then(() => {
                    handleAuthClick()
                })
                .catch((e) => {
                    console.log(e);
                });
        }
        const handleClientLoad = () => {
            const scriptGoogle = document.createElement("script");
            const scriptGapi = document.createElement("script");
            scriptGoogle.src = "https://accounts.google.com/gsi/client";
            scriptGoogle.async = true;
            scriptGoogle.defer = true;
            scriptGapi.src = "https://apis.google.com/js/api.js";
            scriptGapi.async = true;
            scriptGapi.defer = true;
            document.body.appendChild(scriptGapi);
            document.body.appendChild(scriptGoogle);
            scriptGapi.onload = () => {
                // eslint-disable-next-line no-undef
                gapi.load("client", initGapiClient);
            };
            scriptGoogle.onload = async () => {
                // eslint-disable-next-line no-undef
                tokenClient = await google.accounts.oauth2.initTokenClient({
                    client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                    scope: "https://www.googleapis.com/auth/calendar",
                    callback: () => {
                    }
                });
            };
        }
        handleClientLoad()

        getUser()
            .then(user => {
                if (user?.id) {
                    setUserDetails(user)
                    getPatient()
                        .then(patient => {
                            visitObject = {...visitDetails};
                            visitObject.patient.patientId = patient.patientId;
                            setVisitDetails(visitObject);
                        })
                        .catch(err => {
                            history.push("/")
                            console.log(err.message)
                        })
                } else {
                    setTimeout(() => {
                        history.push("/")
                    }, 3000);
                    dispatch(showModal());
                }
            })
    }, [visitDetails.patient.patientId])

    useEffect(() => {
        getDoctorSpecialities().then(doctorSpecialities => {
            if (doctorSpecialities) {
                setDoctorSpecialities(() => {
                    return doctorSpecialities
                });
                setIsDoctorSpecialitiesLoading(false);
            }
        }).catch(err => console.warn(err.message))
    }, [])

    useEffect(() => {
        getListOfClinics().then(clinics => {
            if (clinics) {
                setClinicList(() => {
                    return clinics
                });
                setIsClinicListLoading(false);
            }
        }).catch(err => console.warn(err.message))
    }, [])

    useEffect(() => {
        getDoctorsForClinic(visitDetails.clinic.clinicId).then(doctors => {
            if (doctors) {
                setDoctorList(() => {
                    return doctors
                });
                setIsDoctorListLoading(false);
            }
        })
            .catch(err => console.warn(err.message))
    }, [visitDetails.clinic.clinicId]);

    useEffect(() => {
        if (visitDetails.doctorSpeciality === "") {
            return;
        }
        getDoctorsForSpeciality(visitDetails.doctorSpeciality).then(doctors => {
            if (doctors) {
                setDoctorList(() => {
                    return doctors
                });
                setIsDoctorListLoading(false);
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
        document.querySelector("#nav-tabContent").classList.add("show");
    }

    const toggleOnline = (e) => {
        visitObject = {...visitDetails};
        visitObject.online = e.target.value === "true";
        if (e.target.value === "true") {
            visitObject.clinic.clinicId = ONLINE_CLINIC_ID
        }
        setVisitDetails(visitObject);
    }

    const submitVisit = (e) => {
        e.preventDefault();
        const form = document.getElementById(visitDetails.online ? 'visit-form-online' : 'visit-form-clinic')
        if (!form.checkValidity()) {
            return;
        }
        if (isSubmitting) {
            return;
        }
        setIsSubmitting(true);
        postVisit()
            .then(newVisit => {
                const eventDate = new Date(visitDetails.date)
                const event = {
                    summary: "AppSick Online Visit",
                    description: `${visitDetails.reason}`,
                    start: {
                        dateTime: eventDate.toISOString(),
                        timeZone: 'Europe/Warsaw'
                    },
                    end: {
                        dateTime: (new Date(eventDate.getTime() + 3600000)).toISOString(),
                        timeZone: 'Europe/Warsaw'
                    },
                    attendees: [
                        {email: userDetails.email}
                    ],
                    reminders: {
                        useDefault: false,
                        overrides: [
                            {method: 'email', minutes: 24 * 60},
                            {method: 'popup', minutes: 10}
                        ]
                    },
                    conferenceData: {
                        createRequest: {
                            requestId: `${userDetails.id}+${eventDate.toISOString()}`,
                            conferenceSolutionKey: {
                                type: "hangoutsMeet"
                            }
                        }
                    }
                };
                // eslint-disable-next-line no-undef
                gapi.client.calendar.events.insert({
                    calendarId: "primary",
                    resource: event,
                    sendNotifications: true,
                    conferenceDataVersion: 1
                }).execute(function (event) {
                    console.log('Event Created: ' + event.htmlLink)
                    console.log('event: ', event)
                })

                history.push("/visit");
                toast({
                    title: "Visit registered successfully.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
            })
            .catch(err => console.warn(err.message))
            .finally(() => {
                setIsSubmitting(false)
            });
    }

    function visitForm(online) {
        return (
            <form id={online ? "visit-form-online" : "visit-form-clinic"}
                  className="row justify-content-center fs-5 px-5 py-3">
                {online ? "" : clinicVisitForm()}
                <label htmlFor={"doctor"}>Doctor:</label>
                <Select name={"doctor"} className={"form-select mb-3"} onChange={changeDoctor} required>
                    <option value="" hidden>- Select a Doctor -</option>
                    {isDoctorListLoading ? "" : doctorList.map(doctor => {
                        if (!doctor.medicalSpecialities.includes(visitDetails.doctorSpeciality)) {
                            return;
                        }
                        return <option key={doctor.doctorId}
                                       value={doctor.doctorId}>{doctor.user.firstName} {doctor.user.lastName}</option>;
                    })
                    }
                </Select>
                <label htmlFor={"date"}>Date:</label>
                <input type={"datetime-local"} className={"mb-3"} name={"date"} onChange={changeVisitDate} required/>

                <div className="form-group info-border">
                    <label htmlFor="visit-description">Visit description:</label>
                    <Textarea className="form-control mb-3" name={"visit-description"} rows="5"
                              onChange={changeVisitDescription}></Textarea>
                </div>
                <button
                    className="btn fs-3 text-black border border-dark border-2 rounded-pill p-2 px-4 btnx d-flex col-auto"
                    onClick={submitVisit}>
                    Submit
                    <div className="fs-1 d-inline px-1">
                        <RiSendPlaneLine/>
                    </div>
                </button>
            </form>
        )
    }

    function clinicVisitForm() {
        return (
            <>
                <label htmlFor={"clinic"}>Clinic:</label>
                <Select name={"clinic"} className="form-select mb-3" onChange={changeClinic} required>
                    <option value="" hidden>- Select Clinic -</option>
                    {isClinicListLoading ? "" : clinicList.map(clinic => {
                        if (clinic.clinicId === ONLINE_CLINIC_ID) {
                            return;
                        }
                        return <option key={clinic.clinicId} value={clinic.clinicId}>{clinic.clinicName}</option>;
                    })
                    }
                </Select>
            </>
        )
    }

    if (!visitDetails.patient.patientId) {
        return (
            <div className={"container fixed-top mx-auto m-5 text-center"}>
                Redirecting... <Spinner size={'md'}></Spinner>
            </div>
        )
    }

    return (
        <>
            <div className={"container col-6 mx-auto m-3 rounded-5 bg-light text-dark bg-opacity-1 green-shadow"}>

                <h1 className={"fs-1 pt-3 text-center"}>Make an appointment</h1>

                <div className={"container mx-auto m-3 px-5 py-3"}>
                    <label className={"p-3 fs-5"} htmlFor={"specialities"}>What kind of service do you require?:</label>
                    <Select name={"specialities"} className={"form-select"} onChange={changeDoctorSpeciality} required>
                        <option value="" hidden>- Select a Speciality -</option>
                        {isDoctorSpecialitiesLoading ? "" : doctorSpecialities.map(speciality => {
                            return <option key={speciality}
                                           value={speciality}>{speciality}</option>;
                        })
                        }
                    </Select>
                </div>

                <nav className={"d-flex justify-content-center align-items-center"}>
                    <div className={"nav nav-tabs nav-fill"} id="nav-tab" role="tablist">

                        <button className={"nav-link d-inline-block active"} data-bs-toggle={"tab"} id={"nav-online-tab"}
                                data-bs-target={"#nav-online"} type={"button"} role={"tab"}
                                aria-controls={"nav-online"} aria-selected={"true"}
                                onClick={toggleOnline} value={"true"}>Online consultation
                        </button>

                        <button className={"nav-link d-inline-block"} data-bs-toggle={"tab"} id={"nav-clinic-tab"}
                                data-bs-target={"#nav-clinic"} type={"button"} role={"tab"}
                                aria-controls={"nav-clinic"} aria-selected={"false"}
                                onClick={toggleOnline}>Meet in person
                        </button>

                    </div>
                </nav>

                <div className={"tab-content"} id={"nav-tabContent"}>

                    <div className={"tab-pane fade show active p-3"} id={"nav-online"} role={"tabpanel"}
                         aria-labelledby={"nav-online-tab"}>
                        {visitForm(true)}
                    </div>

                    <div className={"tab-pane fade p-3"} id={"nav-clinic"} role={"tabpanel"}
                         aria-labelledby={"nav-clinic-tab"}>
                        {visitForm(false)}
                    </div>

                </div>
            </div>
        </>
    );
};

export default VisitRegistration;
