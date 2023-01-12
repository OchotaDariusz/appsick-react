import React from "react"
import Map from "../Map/Map";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandshake} from '@fortawesome/free-solid-svg-icons'
import attribution from "../../pages/Credits"

export default function Footer() {
    return (
        <div className="mt-auto footer rounded-4 green-shadow">
            <div className="row text-dark p-5">

                <div className="col-2">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="fs-4">Info</div>
                    <div className="fs-4">FAQ</div>
                    <div className="fs-4">Terms of use</div>
                    <br/>
                    <hr/>
                    <br/>
                    <div className="fs-4">
                        <Link className="nav-link d-flex align-items-center" to={'/credits'}>
                            <FontAwesomeIcon icon={faHandshake} className="me-2" />
                            Credits
                        </Link>
                        </div>


                </div>
                <div className="col-2">


                </div>
                <div className="col-2">


                </div>
                <div className="col-2">
                    <div className="fs-4">
                        Our location:
                    </div>
                    <div className="fs6">
                        Plac Szczepański 7/66
                        03-333 Warszawa
                    </div>


                </div>
                <div className="col-4" style={{height: '300px'}}>
                    <Map/>
                </div>

            </div>
        </div>

    );
}