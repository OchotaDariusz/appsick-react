import React from "react"
import logo from '../../assets/logo/logo1.svg'
import News from "./News";
import Footer from "../Footer/Footer";

export default function Home() {
    return (
        <div>
            <div className="home-main-text">
                <div className="fs-1 px-4" >App Sick</div>
                <div className="fs-2" >With our help you can make an appointment quickly and safely.<br/>
                    Give it a try now. <br/><br/></div>
                <button className={'button'}>START WITH US</button>
            </div>

            <News/>


            <div className={"main-container-of-slides"}>
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
                                    <h5>Mietek P</h5>
                                    <p>Szybka i przyjemna wizyta! Najlepsza lewatywa w Mieście </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={logo} className="d-block w-10 opacity-0" alt="..."/>
                                <div className="carousel-caption d-none d-md-block text-dark text-slider">
                                    <h5>Janusz K</h5>
                                    <p>Ręce Pani doktor zrobiły cuda. Pnis jak nowy</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={logo} className="d-block w-10 opacity-0" alt="..."/>
                                <div className="carousel-caption d-none d-md-block text-dark text-slider">
                                    <h5>Magda M</h5>
                                    <p>Czuję że się mną zaopiekowano. </p>
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
            </div>
            <Footer/>
        </div>
    );
}