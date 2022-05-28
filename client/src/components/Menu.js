import React from "react";

//import 'react-slideshow-image/dist/styles.css'
/* eslint-disable react/jsx-no-undef */

import pizza from "../images/pizza.jpg"
import Paste from "../images/Paste.jpg"
import Burgir from "../images/Burgir.jpg"
import desert from "../images/desert1.jpg"
import drinks from "../images/drinks.jpg"



import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


export default function Menu()
{
    return(
        <div className="container">
            <AliceCarousel autoPlay autoPlayInterval="4000000" >
                <div> <img src={pizza} className="sliderimg2"/>
                    <div className="masaj"> <h1>Pizza</h1></div>
                    <div className="descriere-masaj">
                      <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <p>Price : 15 $</p>
                    </div>
                </div>

                <div> <img src={Paste} className="sliderimg2"/>
                    <div className="masaj"> <h1>Italian Pasta</h1></div>
                    <div className="descriere-masaj">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <p>Price : 18 $</p>
                    </div>
                </div>

                <div> <img src={Burgir} className="sliderimg3"/>
                    <div className="descriere-tratament">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <p>Price : 20 $</p>
                    </div>
                    <div className="tratament"> <h1>Burgir</h1></div>
                    <div className="tratamentp"></div>
                </div>

                <div> <img src={desert} className="sliderimg4"/>
                    <div className="sauna"> <h1>Desert</h1></div>
                    <div className="descriere-sauna">
                        <br/>

                        <p>Price : 19$</p></div>

                </div>

                <div> <img src={drinks} className="sliderimg4"/>
                    <div className="sauna"> <h1>Drinks</h1></div>
                    <div className="descriere-sauna">
                        <br/>
                        <p>Price : 10 $</p></div>



                </div>

            </AliceCarousel>
        </div>

    )
}