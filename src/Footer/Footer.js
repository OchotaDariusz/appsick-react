import React from "react"
import location from "./location.png";


export default function Footer() {
    return (
        <div className="    ">
            <div className="row text-white" style={{padding:'50px 100px 100px', backgroundColor:' #465969'}}>

                <div className="col-2" >
                    <h4>Dupa</h4>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>


                </div>
                <div className="col-2" >
                    <h4>Dupa</h4>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>


                </div>
                <div className="col-2" >
                    <h4>Dupa</h4>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>
                    <p>text text text</p>


                </div>
                <div className="col-2" >
                    <h4>Dupa</h4>
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