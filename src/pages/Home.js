import React, {useEffect} from "react"
import logo from '../assets/logo/logo1.svg'
import News from "../components/NewsCarousel/News";
import Footer from "../components/Footer/Footer";
import {useAuth} from "../components/Auth/Auth";
import name_logo from "../assets/logo/name.png"
import bg_doc from "../assets/background/bg_doctor.png"
import './Home.css';
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            console.log("ENTRY")
            entry.target.classList.add('showX');
        } else {
            entry.target.classList.remove('showX');
            console.log("ERLO")
        }
    })
})


const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));
console.log(hiddenElements + "hidden")



export default function Home() {
    const auth = useAuth()
    console.log(auth.email)

    useEffect(() => {
        const hiddenElements = document.querySelectorAll('.hidden')
        hiddenElements.forEach((el) => observer.observe(el));
    })
    return (
        <div>
            <img className="" src={bg_doc}
                 alt="logo" style={{position: "absolute"}}/>

            {auth.role !== "PATIENT" ?
                <div >
                    <section className="hidden">

                        <div className="container">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <img className="" src={name_logo}
                                         alt="logo" style={{height: 160}}/>

                                </div>
                            </div>
                        </div>
                        <div className="fs-1 px-4">Welcome to App Sick</div>
                        <div className="fs-3 text-center">With our help you can make an appointment quickly and safely.<br/>
                            Give it a try now.
                            <br/>
                            {/*<div className="article">*/}
                            {/*    <div className="article-in">*/}
                            {/*        <button className="btn fs-1 border-2 border-white text-white">START WITH US</button>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <br/><br/></div>
                    </section>
                    <section className="hidden">

                        <div className="fs-1 text-center">
                            AppSick is a promising startup in the private health sector in Poland.<br/>
                            Our ambition is to deliver the most accessible and convenient systems <br/>
                            for private healthcare market.
                        </div>
                    </section>
                    <section className="hidden">
                        <div className="fs-1" text-center>
                            This means a commitment to excellent customer experience,<br/> through great service and value.
                        </div>
                    </section>
                    <section className="hidden">
                        <div className="fs-1 text-center">
                            Our application is aimed at coordination of private healthcare companies.
                        </div>
                    </section>
                    <section className="hidden">
                        <div className="fs-1 text-center">
                            We offer management systems for both digital & local <br />consultations between a patient and a doctor.
                        </div>
                    </section>


                </div>
                : <div className="">
                    <section className="hidden">

                        <div className="fs-1 px-4">App Sick</div>
                        <div className="fs-3 text-center">With our help you can make an appointment quickly and safely.<br/>
                            Give it a try now.
                            <br/>
                            Zalogowany User
                            <br/><br/></div>
                    </section>
                    <section className="hidden">

                        <div className="fs-4">
                            AppSick is a promising startup in the private health sector in Poland. Our ambition is to
                            deliver the most accessible and convenient systems for private healthcare market.
                        </div>
                    </section>
                    <section className="hidden">
                        <div className="fs-4">
                            This means a commitment to excellent customer experience, through great service and value.
                        </div>
                    </section>
                    <section className="hidden">
                        <div className="fs-4">
                            Our application is aimed at coordination of private healthcare companies.
                        </div>
                    </section>
                    <section className="hidden">
                        <div className="fs-4">
                            We offer management systems for both digital & local consultations between a patient and a
                            doctor.
                        </div>
                    </section>

                    <div className="article">
                        <div className="article-in">
                            <button className="btn fs-1 border-2 border-white text-white">START WITH US</button>
                        </div>
                    </div>
                </div>
            }


            <News/>


            <div className={"main-container-of-slides"}>
                <section>

                    <div className={"container-of-slides"}>
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                        className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                        aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                        aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={logo} className="d-block w-10 opacity-0 " alt="..."/>
                                    <div className="carousel-caption d-none d-md-block text-dark text-slider">
                                        <div className="fs-3">Klara</div>
                                        <p>Polecam pediatra miły i kompetentny. Nie ma presji czasu a więc mozna
                                            przegadać
                                            wszystko z czym sie przyszło.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={logo} className="d-block w-10 opacity-0" alt="..."/>
                                    <div className="carousel-caption d-none d-md-block text-dark text-slider">
                                        <div className="fs-3">Hania</div>
                                        <p>Bardzo udana współpraca. Cena nie zniechęca, zwłaszcza że korzystam średnio
                                            raz
                                            na 3-4 miesiące.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={logo} className="d-block w-10 opacity-0" alt="..."/>
                                    <div className="carousel-caption d-none d-md-block text-dark text-slider">
                                        <div className="fs-3">Marek</div>
                                        <p>Idealne w okresie grypowym. Bez problemu uzyskałam receptę i L4. Dziekuję za
                                            pomoc!</p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>


                    </div>
                </section>

            </div>
            <Footer/>
        </div>
    );
}
