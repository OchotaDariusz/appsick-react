import React, { useState, useEffect } from 'react'

const VisitRegistration = () => {
    const [visitDetails, setVisitDetails] = useState(
        {
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
    )

    return (
        <div>

        </div>
    );
};

export default VisitRegistration;


// {
//   "clinic": {
//     "clinicId": 1
//   },
//   "date": "2022-11-14T19:57:07.153Z",
//   "doctor": {
//     "doctorId": 1
//   },
//   "online": true,
//   "patient": {
//     "patientId": 1
//   },
//   "reason": "string",
//   "status": "PENDING"
// }