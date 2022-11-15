import React from "react"
import logo from "../logo1.svg";


export default function News() {
    return (
        <>
            <div className="big-container">
            <div className="container1">
                <header>
                    <h1>-----NEWS------</h1>
                </header>
                <div id="news">
                    <div className="article">
                        <div className="article-in">
                            <img src={logo} className="d-block w-10" alt="..."/>
                            <h3>info</h3>
                            <p>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle
                                poligraficznym.
                                Został po raz pierwszy użyty w XV w.
                                przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków
                                później
                                zaczął
                                być używany przemyśle elektronicznym,
                            </p>
                        </div>
                    </div>
                    <div className="article">
                        <div className="article-in">
                            <img src={logo} className="d-block w-10" alt="..."/>
                            <h3>info 2</h3>
                            <p>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle
                                poligraficznym.
                                Został po raz pierwszy użyty w XV w.
                                przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków
                                później
                                zaczął
                                być używany przemyśle elektronicznym,
                            </p>
                        </div>
                    </div>
                    <div className="article">
                        <div className="article-in">
                            <img src={logo} className="d-block w-10 " alt="..."/>
                            <h3>info</h3>
                            <p>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle
                                poligraficznym.
                                Został po raz pierwszy użyty w XV w.
                                przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków
                                później
                                zaczął
                                być używany przemyśle elektronicznym,
                            </p>
                        </div>
                    </div>


                </div>
            </div>
            </div>

        </>
    );
}