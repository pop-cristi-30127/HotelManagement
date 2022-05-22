import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import Hero from "./Hero"
import axios from "../api/axios";


//import "../App.css"
const LOGIN_URL = "/login";

function Login() {
    // React States
    const [errorMessages, setErrorMessages] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    // const navigate = useNavigate();
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    useEffect(() => {
        setErrorMessages('')
    }, [Email, Password])


    const handleSubmit = async (event) => {
        //Prevent page reload
        event.preventDefault();
        console.log(Email, Password);
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({Email, Password}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: false
                });

            console.log(response);
            setEmail('')
            setPassword('')
            setErrorMessages('')
            setIsSubmitted(true);
        } catch (err) {
            if (err) {
                setErrorMessages(err)
            }
        }
    };


    // Generate JSX code for error message
    const renderErrorMessage = () => {
        return (
            <div className="error">Invalid Login</div>
        );
    };

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="email" name="email" required onChange={e => setEmail(e.target.value)}/>
                    {errorMessages ? renderErrorMessage() : ""}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required onChange={e => setPassword(e.target.value)}/>
                    {errorMessages ? renderErrorMessage() : ""}
                </div>
                <div className="button-container">
                    <input type="submit"/>
                </div>
            </form>
        </div>
    );

    return (
        <Hero hero="defaultHero">

            <div className="app">
                <div className="login-form">
                    <div className="title">Sign In</div>
                    {isSubmitted ? <div>
                        <div>User is successfully logged in</div>
                        <Link to="/rooms" className="btn-primary">
                            Book Now
                        </Link>

                    </div> : renderForm}


                </div>
            </div>
        </Hero>


    );

}

export default Login;