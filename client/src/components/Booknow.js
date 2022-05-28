import img1 from "../images/room-1.jpg";
import { useState } from 'react';
import StyledHero from "./StyledHero";
import Banner from "./Banner";
import {Link} from "react-router-dom";
import React from "react";
import Hero from "./Hero";

const Booknow = () => {
    const [valid, setvalid] = useState(true)
    const [hide, sethide] = useState(true)
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const book_date = document.getElementById('book-date');
        const book_time = document.getElementById('book-time');
        const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

        const leave_date = document.getElementById('leave-date');
        const leave_time = document.getElementById('leave-time');


        if (!book_date.value || !book_time.value || !leave_date.value || !leave_time.value) {
            alert('Please fill all the fields');
        }
       else if(book_date.value>=leave_date.value)
        {
            alert('Please select a valid leave date');

        }


        else
        {
            setIsSubmitted(true);

        }
    }
    const renderForm = (
                <>




                    <div className="form">
                        <div className="input-container">
                            <div className="text">Book Now</div>
                            <div className="input-container">
                                <div className="text1 form">Date & Time you would like to Stay</div>
                                <form action="" onSubmit={handleSubmit}>
                                    <div className="inputData">
                                        <input type="date" name="" id="book-date" min="2022-05-29" max="2023-12-31"/>
                                    </div>
                                    <div className="inputData">
                                        <input type="time" name="" id="book-time" />
                                    </div>
                                    <div className="text1">Date & Time you would like to leave</div>
                                    <div className="inputData">
                                        <input type="date" name="" id="leave-date" min="2022-05-29" max="2024-12-31"/>
                                    </div>
                                    <div className="inputData">
                                        <input type="time" name="" id="leave-time" />
                                    </div>
                                    <div className="button-container">
                                        <button type="submit" className="btn-primary" >Book</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )
    return (
        <Hero hero="defaultHero">

            <div className="">
                <div className="login-form">

                    {isSubmitted ?
                        <div>
                        <div className="title">Thank you</div>

                        <div>Your room was successfully booked.</div>
                        <div>Check your email for payment details.</div>


                    </div> : renderForm}


                </div>
            </div>
        </Hero>


    );

}
        export default Booknow;