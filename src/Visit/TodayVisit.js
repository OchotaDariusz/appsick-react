import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import Collapse from 'react-bootstrap/Collapse';
import {useState} from "react";

export default function TodayVisit({visit}) {
    const [open, setOpen] = useState(false);

    const snakeToCamel = str =>
        str.toLowerCase().replace(/([-_][a-z])/g, group =>
            group
                .toUpperCase()
                .replace('_', '')
        )

    let fullMedicalName
    if (!visit.doctor.medicalSpecialities[0].includes("_")) {
        fullMedicalName = visit.doctor.medicalSpecialities[0].charAt(0) + visit.doctor.medicalSpecialities[0].slice(1)
    } else {
        const result = snakeToCamel(visit.doctor.medicalSpecialities[0]).replace(/([A-Z])/g, " $1");
        fullMedicalName = result.charAt(0).toUpperCase() + result.slice(1);
    }
    return (
        <div className="row align-items-center">

            <div className="row align-items-center">

                <div className="col-9 container rounded-3 bg-white text-dark my-3">
                    <div className="row justify-content-between">
                        <div className="col-4 fs-3">
                            {visit.doctor.user.firstName} {visit.doctor.user.lastName}
                        </div>
                        <div className="col-auto text-capitalize text-decoration-underline"
                             onClick={() => setOpen(!open)}
                             aria-controls="example-collapse-text"
                             aria-expanded={open}>
                            See details
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-2">
                            <img src="https://www.getmaple.ca/site-content/uploads/2020/08/female_dr.jpg"
                                 className="img-fluid rounded-circle"
                                 style={{height: "100px", width: "100px"}}
                                 alt="doctor"/>
                        </div>
                        <div className="col-5 m-1">
                            <div className="row fs-5 mx-1">
                                {fullMedicalName}
                            </div>
                            <div className="row ">
                                <div className="col text-primary ">
                                    <FontAwesomeIcon icon={faLocationDot} className="me-2"/>
                                    {visit.clinic.clinicName}, X: {visit.clinic.longitude}, Y: {visit.clinic.latitude}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Rozsuwane*/}
                    <Collapse in={open}>
                        <div>
                            <br/>
                            <hr/>
                            <br/>
                            <div id="example-collapse-text">
                                <div className="fs-4">
                                    Recommendations
                                </div>
                                <div>
                                    first name
                                    <br/>
                                    {/*{visit.patient.birthDate}*/}
                                </div>
                                <br/>
                                <hr/>
                                <br/>
                                <div className="fs-4">
                                    Referrals
                                </div>
                                <div>
                                    {/*{visit.patient.password}*/}
                                    <br/>
                                    {/*{visit.patient.medicalData.weight}*/}
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>
    );
}