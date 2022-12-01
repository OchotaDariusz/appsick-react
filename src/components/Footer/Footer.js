import React from "react"
import location from "../../assets/background/location.png";
import Map from "../Map/Map";


export default function Footer() {
    return (
        <div className="mt-auto">
            <div className="row text-white p-5" style={{backgroundColor:'#465969'}}>

                <div className="col-2" >
                    <h5>MY APPOINTMENTS</h5>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>


                </div>
                <div className="col-2" >
                    <h5>FINDINGS</h5>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>


                </div>
                <div className="col-2" >
                    <h5>DRUGS</h5>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>


                </div>
                <div className="col-2" >
                    <h5>MAKE AN APPOINTMENT</h5>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>


                </div>
                <div className="col-4" style={{height:'300px'}} >
                    {/*<img src={location} className="d-block w-10" alt="..."/>*/}
                    <Map />
                </div>

            </div>

        </div>

    );
}