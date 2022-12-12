import Collapse from 'react-bootstrap/Collapse';
import {useState} from "react";
import maleDoctor from "../../assets/icons/Lekarz.svg"
import femaleDoctor from "../../assets/icons/Lekarka.svg"
import {Link} from "react-router-dom";
import MapModal from "../Map/MapModal";
import Button from "react-bootstrap/Button";
import {isToday} from "../../utils/Utils";

export default function Visit({visit, cancelVisit}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="row align-items-center">

            <div className="row align-items-center text-center ">
                <div className="col-2 px-3 ">
                    <div className="col-auto rounded-3 bg-white text-dark shadow-sm p-2 border border-2 btnx">
                        {visit?.date[0]}
                        <hr/>
                        {visit?.date[1].slice(0, 5)}
                    </div>
                </div>

                <div className="col-10 rounded-3 bg-white text-dark my-3 pb-3 px-4 pt-2 border border-2 btnx">
                    <div className="row justify-content-between">
                        <div className="col-6 my-1 fs-3 text-start">
                            {visit?.doctor?.user?.firstName} {visit?.doctor?.user?.lastName}
                        </div>
                        <div className="col-auto text-capitalize text-decoration-underline"
                             onClick={() => setOpen(!open)}
                             aria-controls="example-collapse-text"
                             aria-expanded={open}
                             role="button">
                            See details
                        </div>
                    </div>

                    <div className="row align-items-start">
                        <div className="col-2">
                            <img src={visit?.doctor?.user?.image ?
                                visit?.doctor?.user?.image :
                                visit?.doctor?.user?.sex === "MALE" ?
                                    maleDoctor : femaleDoctor}
                                 className="img-fluid rounded-circle"
                                 style={{height: "100px", width: "100px"}}
                                 alt="doctor"/>
                        </div>

                        <div className="col-5 m-1">

                            <div className="row fs-5">
                                {visit?.doctor?.medicalSpecialities[0]}
                                <br/>
                                {visit.visitTypes[0] === "LOCAL" ?
                                    <div className="row align-items-start">Online Visit</div> :
                                    <MapModal visit={visit}/>}

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
                                    Visit reason:
                                </div>
                                <div>
                                    {visit?.reason}
                                    <br/>
                                </div>

                                {new Date(visit?.date) < new Date() ?      // O CHUJ TU CHODZI
                                    <div>
                                        {console.log(new Date(visit?.date))}
                                        <br/>
                                        <hr/>
                                        <br/>
                                        <div className="fs-4 ">
                                            Recommendation
                                        </div>
                                        <div>
                                            <br/>
                                            {visit?.patient?.user?.email}
                                        </div>
                                    </div>
                                    : ""}


                                <br/>
                                <hr/>
                                <div>
                                    {isToday(visit) ?
                                        <Link to={`/visit/${visit?.visitId}`} className="btn btn-dark my-3">
                                            Ask doctor a question</Link> : ""}
                                    {new Date(visit?.date) > new Date() ?
                                        <Button className="fs-3 text-dark bg-light border border-danger
                                            border-2 rounded-pill p-2 green-shadow mt-3 px-3"
                                                onClick={() => {
                                                    cancelVisit(visit?.visitId)
                                                }
                                                }>
                                            Cancel Visit
                                        </Button> :
                                        ""
                                    }
                                </div>


                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>
    );
}