import React, {useEffect} from "react"
import Calendar from "../components/Calendar/Calendar";
export default function UserPage() {

    return (
        <>
            <div className="container-fluid col-lg-6 col-md-12 col-sm-12
             mx-auto rounded-5 bg-light text-dark  mt-3 green-shadow">
                <div className="row justify-content-center">
                    <div className="col">USER PAGE</div>
                    <div className="col">

                        <Calendar />

                    </div>
                </div>
            </div>

        </>
    )
}


