import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import Hero from "./Hero"
import axios from "../api/axios";
import Login from "./Login";
const REGISTER_URL = "/";
function Register() {

    const [errorMessages, setErrorMessages] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    // const navigate = useNavigate();
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [PwdConfirm, setPwdConfirm] = useState('');
    const [Telephone, setTelephone] = useState('');

    useEffect(() => {
        setErrorMessages('')
    }, [PwdConfirm, Password])

    const handleSubmit = async (event) => {
        //Prevent page reload
        event.preventDefault();
        if (Password !== PwdConfirm) {
            setErrorMessages('Passwords did not match!');
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({FirstName,LastName,Telephone,Email,Password}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: false
                });

            console.log(response);
            setLastName('');
            setFirstName('');
            setEmail('');
            setTelephone('');
            setPassword('');
            setErrorMessages('')
            setIsSubmitted(true);
        } catch (err) {
            if (err) {
                setErrorMessages(err)
            }
        }



    }
        const renderErrorMessage = () => {
            return (
                <div className="error">{errorMessages}</div>
            );
        }



        const renderForm = (
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>Last Name </label>
                        <input type="text" name="name" required onChange={e => setLastName(e.target.value)}/>

                    </div>
                    <div className="input-container">
                        <label>First Name </label>
                        <input type="text" name="name" required onChange={e => setFirstName(e.target.value)}/>

                    </div>
                    <div className="input-container">
                        <label>Email </label>
                        <input type="email" name="email" required onChange={e => setEmail(e.target.value)}/>

                    </div>
                    <div className="input-container">
                        <label>Telephone</label>
                        <input type="number" name="telephone"required onChange={e => setTelephone(e.target.value)}/>

                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="pass" required onChange={e => setPassword(e.target.value)}/>

                    </div>
                    <div className="input-container">
                        <label>Confirm Password </label>
                        <input type="password" name="pass" required onChange={e => setPwdConfirm(e.target.value)}/>

                    </div>
                    <div>
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
                        <div className="title">Register</div>
                        {isSubmitted ? <div>
                            <div>User successfully registered</div>
                            <Link to="/login/" className="btn-primary">
                                Login Now
                            </Link>

                        </div> : renderForm}


                    </div>
                </div>
            </Hero>


        );

    }
export default Register;