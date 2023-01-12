import React from "react"
import contact_email from "../assets/background/contact-email.png";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/Contact/ContactForm";


export default function Contact() {


    return (
        <>
            <div className="container-fluid col-lg-6 col-md-12 col-sm-12
             mx-auto rounded-5 bg-light text-dark  mt-3 green-shadow">
                <div className="row justify-content-center d-inline">
                    <br />
                    <img src={contact_email} alt="contact"/>
                    <div className="col fs-1 text-center">Contact</div>
                    <br />
                    <ContactForm />
                </div>
            </div>
            <br />
            <Footer />
        </>

    )
}