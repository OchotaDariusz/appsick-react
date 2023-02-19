import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EndVisitForm({
  userId,
  visitId,
  showEndVisitForm,
  handleClose,
  endVisit,
}) {
  const formRef = useRef(null);
  const [medicalData, setMedicalData] = useState({
    weight: "",
    height: "",
    medicalConditions: "",
    allergies: "",
    addictions: "",
    medicaments: "",
    recommendations: "",
  });

  const submitForm = (event) => {
    event.preventDefault();

    console.log({
      ...medicalData,
      userId,
      visitId,
    })

    fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/medical_data`, {
      credentials: "include",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...medicalData,
        userId,
        visitId,
      }),
    })
      .then(() => {
        formRef.current.reset();
        endVisit();
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <Modal show={showEndVisitForm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Patient Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="endVisitForm" onSubmit={submitForm} ref={formRef}>
            <label className="form-label">Weight</label>
            <input
              className="form-control mb-3"
              type="number"
              step="1"
              min="0"
              max="500"
              required
              onChange={(e) =>
                setMedicalData({
                  ...medicalData,
                  weight: e.target.value,
                })
              }
            />
            <label className="form-label">Height</label>
            <input
              className="form-control mb-3"
              type="number"
              step="1"
              min="0"
              max="500"
              required
              onChange={(e) =>
                setMedicalData({
                  ...medicalData,
                  height: e.target.value,
                })
              }
            />
            <label className="form-label">Medical Conditions</label>
            <input
              className="form-control mb-3"
              type="text"
              maxLength="255"
              required
              onChange={(e) =>
                setMedicalData({
                  ...medicalData,
                  medicalConditions: e.target.value,
                })
              }
            />
            <label className="form-label">Allergies</label>
            <input
              className="form-control mb-3"
              type="text"
              maxLength="255"
              required
              onChange={(e) =>
                setMedicalData({
                  ...medicalData,
                  allergies: e.target.value,
                })
              }
            />
            <label className="form-label">Addictions</label>
            <input
              className="form-control mb-3"
              type="text"
              maxLength="255"
              required
              onChange={(e) =>
                setMedicalData({
                  ...medicalData,
                  addictions: e.target.value,
                })
              }
            />
            <label className="form-label">Medicaments</label>
            <input
              className="form-control mb-3"
              type="text"
              maxLength="255"
              required
              onChange={(e) =>
                setMedicalData({
                  ...medicalData,
                  medicaments: e.target.value,
                })
              }
            />
            <label className="form-label">Recommendations</label>
            <textarea
              className="form-control mb-3"
              maxLength="255"
              required
              onChange={(e) =>
                setMedicalData({
                  ...medicalData,
                  recommendations: e.target.value,
                })
              }
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button form="endVisitForm" variant="primary" type="submit">
            Save(End Visit)
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EndVisitForm;
