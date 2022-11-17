import React from "react"
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import {useMemo} from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function MyVerticallyCenteredModal(props) {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    })

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

                <GoogleMap zoom={10}
                           center={{lat: 44, lng: -80}}
                           mapContainerClassName="map-container">
                </GoogleMap>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default function Map() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>

            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}


