import React from "react";

//import 'react-slideshow-image/dist/styles.css'
/* eslint-disable react/jsx-no-undef */

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import r1 from "../images/r1.PNG"
import r2 from "../images/r2.jpg"
import r3 from "../images/r3.jpg"



export default function Spa()
{
    return(
        <div className="container">
            <AliceCarousel autoPlay autoPlayInterval="4000000" >
                <div> <img src={r1} className="sliderimg1"/>

                    <div className="citat">

                       </div>
                </div>

                <div> <img src={r2} className="sliderimg2"/>
                    <div className="masaj"> </div> <h1>Exquisite Deserts </h1>
                    <div className="descriere-masaj">


                    </div>
                </div>

                <div> <img src={r3} className="sliderimg3"/>
                    <div className="descriere-tratament">

                    </div>
                    <div className="tratament"></div>

                        <h1 color="#FFFFFF">Unique Marine Dishes</h1>

                    <div className="tratamentp"></div>
                </div>


            </AliceCarousel>
        </div>

    )
}