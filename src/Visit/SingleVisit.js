import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Visit() {

    <div className="row align-items-center" key={v.date}>

        <div className="row align-items-center">
            <div className="col-auto my-3 mx-2 container rounded-3 bg-white text-dark shadow-sm">
                {v}
            </div>

            <div className="col-9 container rounded-3 bg-white text-dark my-3">
                <div className="row justify-content-between">
                    <div className="col-4 fs-3">
                        {v.doctorFirstName.value} {v.doctorLastName.value}
                    </div>
                    {/*<div className="col-auto text-capitalize text-decoration-underline"*/}
                    {/*     onClick={() => setOpen(!open)}*/}
                    {/*     aria-controls="example-collapse-text"*/}
                    {/*     aria-expanded={open}>*/}
                    {/*    See details*/}
                    {/*</div>*/}
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
                            {v.doctorSpecialities.value}
                        </div>
                        <div className="row ">
                            <div className="col text-primary ">
                                <FontAwesomeIcon icon={faLocationDot} className="me-2"/>
                                {v.clinicName.value}, X: {v.longitude.value}, Y: {v.latitude.value}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Rozsuwane*/}

                {/*<Collapse in={open}>*/}
                {/*    <div>*/}
                {/*        <br/>*/}
                {/*        <hr/>*/}
                {/*        <br/>*/}
                {/*        <div id="example-collapse-text">*/}
                {/*            <div className="fs-4">*/}
                {/*                Recommendations*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                first name*/}
                {/*                <br/>*/}
                {/*                /!*{v.patient.birthDate}*!/*/}
                {/*            </div>*/}
                {/*            <br/>*/}
                {/*            <hr/>*/}
                {/*            <br/>*/}
                {/*            <div className="fs-4">*/}
                {/*                Referrals*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                /!*{v.patient.password}*!/*/}
                {/*                <br/>*/}
                {/*                /!*{v.patient.medicalData.weight}*!/*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</Collapse>*/}
            </div>
        </div>
    </div>
)

}