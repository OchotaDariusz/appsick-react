import React from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function MyVerticallyCenteredModal(props) {

    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Location
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <iframe
                    width="766"
                    height="500"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}Y&q=a&center=${props.visit?.clinic.latitude},${props.visit?.clinic.longitude}`}
                    allowFullScreen>
                </iframe>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default function Map({visit}) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <Button variant="primary" onClick={() => setModalShow(true)}>

            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                visit={visit}
            />
        </div>
    );
}


