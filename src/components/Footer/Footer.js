import React from "react"
import location from "../../assets/background/location.png";


export default function Footer() {
    return (
        <div>
            <div className="row text-white" style={{padding:'50px 100px 100px', backgroundColor:' #465969'}}>

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
                    <img src={location} className="d-block w-10" alt="..."/>

                </div>

            </div>

        </div>

    );
}