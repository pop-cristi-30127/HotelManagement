import React from "react";

//import 'react-slideshow-image/dist/styles.css'
/* eslint-disable react/jsx-no-undef */

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import first from "../images/FIRST.jpg"
import masajp from "../images/MASAJ.jpg"
import tratamentp from "../images/tratament3.png"
import sauna from "../images/sauna.jpg"

export default function Spa()
{
    return(
        <div className="container">
            <AliceCarousel autoPlay autoPlayInterval="4000000" >
                <div> <img src={first} className="sliderimg1"/>

                    <div className="citat">

                        <i>“Give your body a little love, it deserves it.”</i></div>
                </div>

                <div> <img src={masajp} className="sliderimg2"/>
                    <div className="masaj"> <h1>Massages</h1></div>
                    <div className="descriere-masaj">
                        <p>Finding the well-being and natural balance of the body with the most relaxing rituals.</p>
                        <p>Relaxing massages with essential oils, mud or hot stones melt stress and strain under skillful hands, the therapies of ancient medicine restore the body to its natural balance.</p>
                    </div>
                </div>

                <div> <img src={tratamentp} className="sliderimg3"/>
                    <div className="descriere-tratament">
                        <p>Eliminating toxins from the body and improving overall blood flow with a strong stress-relieving effect that energizes the body.</p>
                    </div>
                    <div className="tratament"> <h1>Detoxification treatment</h1></div>
                    <div className="tratamentp"></div>
                </div>

                <div> <img src={sauna} className="sliderimg4"/>
                    <div className="sauna"> <h1>Sauna</h1></div>
                    <div className="descriere-sauna">
                        <p>It creates a state of well-being, relaxation and detachment from stress and daily worries.</p></div>

                </div>
            </AliceCarousel>
        </div>

    )
}
