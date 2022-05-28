import React from 'react'
import Title from "./Title";
import cont from "../images/bckproba.jpg"




export default function Contact() {
    return (
        <section className="contact">
            <Title title="Contact Us"/>


            <React.Fragment>
                <div>
                    <form>
                        <div className="email">
                            <h5>Email adress: beachresort@yahoo.com</h5></div>
                        <div className="telefon">
                            <h5>Phone number: 0389877870/ 0320983788 </h5></div>

                        <div className="adresa">
                            <h5> Adress:H Bonthi Villa 5th Floor,
                                Muranga Magu,
                                Malé,
                                Maldives 20306</h5>
                        </div>
                        <div className="insta">
                            <h5> Instagram: beach.resort</h5>
                        </div>

                        <div> <img src={cont} className="cont"/> </div>


                    </form>
                </div>

            </React.Fragment>

        </section>
    )

}