import React from "react"
import Footer from "./Footer";

export default function Credits() {
    return (
        <div>
            <div className="fs-3 pb-3 container-fluid col-6 mb-5 rounded-5 bg-dark text-dark bg-opacity-10 shadow my-5 text-center">
                <div>
                    Our App wouldn't be the same without the courtesy of the authors <br />
                    of those wonderful graphics. Special thanks to:
                </div>
                <div className="fs-4">
                    PCH from freepik.com:

                </div>
                    <a href="https://www.freepik.com/free-vector/patients-doctors-meeting-waiting-clinic-hall-hospital-
                interior-illustration-with-reception-person-wheelchair-visiting-doctor-office-medical-examination-
                consultation_10173282.htm#query=medical%20illustration&position=23&from_view=search&track=sph">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Freepik.svg/2560px-Freepik.svg.png"/>
                    </a>

                <div className="fs-4">
                    Kampus Production & J Carter from Pexels.com:


                </div>
                    <a href="https://www.pexels.com/pl-pl/zdjecie/zdjecie-starszej-pary-7477717/">
                        <img src="https://help.pexels.com/hc/en-us/article_attachments/900006864786/Logo_on_Transparent.png"/>
                    </a>


            </div>
            <Footer/>
        </div>
    );
}