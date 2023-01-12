import {Link} from "react-router-dom";
import React from "react";


export default function OneVisitHistory({visit}) {

    return(
        <div className={"m-2"}>
            <Link to={`/visit/${visit?.visitId}/history`}>
                <button type="button" className="btn btn-success p-2">
                    Date Visit: {visit?.date[0]},
                    Doctor: {visit?.doctor?.user?.firstName} {visit?.doctor?.user?.lastName},
                    Reason: {visit?.reason}
                </button>
            </Link>
        </div>
    )
}