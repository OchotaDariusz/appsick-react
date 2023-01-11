import React, {useEffect} from "react"
import logo from '../assets/logo/logo1.svg'
import News from "../components/NewsCarousel/News";
import Footer from "../components/Footer/Footer";
import {useAuth} from "../components/Auth/Auth";
import name_logo from "../assets/logo/name.png"
import doc1 from "../assets/background/doc1.png"
import doc2 from "../assets/background/doc2.png"
import rocket1 from "../assets/background/rocket1.png"
import rocket2 from "../assets/background/rocket2.png"
import guy_with_board from "../assets/background/guy_with_board.png"

// import './Home.css';
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


            {auth.role !== "PATIENT" ?
                <div>
                    <section>
                        <div className="anim">
                            <div className="anim-element hidden">
                                <img className="" src={doc1} alt="logo"/>
                            </div>
                            <div className="anim-element hidden">
                                <img className="" src={name_logo} alt="logo"/>
                                <div className="fs-1 px-4 text-center">Welcome to App Sick</div>
                                <div className="fs-3 text-center">With our help you can make
                                    an appointment quickly and safely.<br/></div>
                            </div>
                            <div className="anim-element hidden">
                                <img className="" src={doc2} alt="logo"/>
                            </div>
                        </div>

                    </section>


                </div>
                : <div className="">
                    <section className="hidden">

                        <div className="anim">
                            <div className="anim-element hidden">
                                <div></div>
                                <img className="" src={doc1} alt="logo"/>
                            </div>
                            <div className="anim-element hidden">
                                <br/><br/><br/><br/><br/><br/>
                                <img className="" src={name_logo} alt="logo"/>
                                <div className="fs-1 px-4 text-center">
                                    Welcome to App Sick, where you can <br/>make your doctor appointments
                                    <br/>quickly and safely.<br/></div>

                            </div>
                            <div className="anim-element hidden">
                                <img className="" src={doc2} alt="logo"/>
                            </div>
                        </div>
                    </section>


                </div>
            }
            <section>

                <div className="fs-1 text-center">
                    <div className="anim">
                        <div className="anim-element hidden">
                            <div></div>
                            <img className="" src={rocket1} alt="logo"/>
                        </div>
                        <div className="anim-element hidden">
                            <div className="fs-1 px-4 text-center">
                                <br/><br/><br/><br/>
                                AppSick is a promising startup <br/>in the private health sector in Poland.<br/><br/>
                                Our ambition is to deliver the most accessible and convenient <br/> systems
                                for private healthcare market.
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <section>
                <div className="anim">
                    <div className="anim-element hidden">
                        <div className="fs-1 px-4 text-center">
                            <br/><br/><br/><br/><br/><br/><br/><br/>
                            This means a commitment to excellent customer experience,<br/> through great service and
                            value.
                        </div>
                    </div>
                    <div className="anim-element hidden">
                        <div></div>
                        <img className="" src={guy_with_board} alt="logo"/>
                    </div>
                </div>

            </section>
            <section>
                <div className="anim">
                    <div className="anim-element hidden">
                        <div className="fs-1 text-center">
                            Our application is aimed at coordination of private healthcare companies.
                            <br/>
                            We offer management systems for both digital & local <br/>consultations between a patient
                            and a doctor.
                        </div>
                    </div>
                </div>
            </section>

            <News/>


            <div className="main-container-of-slides rounded-4 green-shadow">

                <div className="container-of-slides ">
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
                                <div className="carousel-caption d-none d-md-block text-dark text-slider text-center">
                                    <div className="fs-1">Klara</div>
                                    <div className="fs-5">Polecam pediatra miły i kompetentny. Nie ma presji czasu a więc mozna
                                        przegadać
                                        wszystko z czym sie przyszło.</div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={logo} className="d-block w-10 opacity-0" alt="..."/>
                                <div className="carousel-caption d-none d-md-block text-dark text-slider text-center">
                                    <div className="fs-1">Hania</div>
                                    <div className="fs-5">Bardzo udana współpraca. Cena nie zniechęca, zwłaszcza że korzystam średnio
                                        raz
                                        na 3-4 miesiące.</div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={logo} className="d-block w-10 opacity-0" alt="..."/>
                                <div className="carousel-caption d-none d-md-block text-dark text-slider text-center">
                                    <div className="fs-1">Marek</div>
                                    <div className="fs-5">Idealne w okresie grypowym. Bez problemu uzyskałam receptę i L4. Dziekuję za
                                        pomoc!</div>
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
