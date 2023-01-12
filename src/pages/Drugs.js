import React from "react";
import order_drugs from "../assets/background/order_drugs.png";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Footer/Footer";


export default function Drugs() {


    return (

        <>
            <div className="container-fluid col-lg-6 col-md-12 col-sm-12
             mx-auto rounded-5 bg-light text-dark  mt-3 green-shadow">
                <div className="row justify-content-center d-inline">
                    <br />
                    <img src={order_drugs} alt="contact"/>
                    <div className="col fs-1 text-center">Drug ordering area</div>
                    <div className="col fs-3 text-center">Here you can order your prescribed drugs</div>
                    <br />

                </div>
            </div>
            <br />
            <Footer />

        </>
    )
}