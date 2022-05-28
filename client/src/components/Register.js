import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
// import 'react-phone-number-input/style.css'

import Hero from "./Hero"
import axios from "../api/axios";
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
        if(Telephone.length>10)
        {
            setErrorMessages('Invalid phone number!')
            return;
        }
       let i;
        for(i = 0; i<=LastName.length;i++)
            if(LastName[i]<'A' || LastName[i]>'z')
            {
                setErrorMessages('Invalid Last Name!')
                return;

            }
        let j;
        for(j = 0; j<=FirstName.length;i++)
            if(FirstName[i]<'A' || FirstName[i]>'z' )
            {
                setErrorMessages('Invalid First Name!')
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
                        <input type="text" name="name" autoComplete="off" required onChange={e => setLastName(e.target.value)}/>

                    </div>
                    <div className="input-container">
                        <label>First Name </label>
                        <input type="text" name="name" autoComplete="off" required onChange={e => setFirstName(e.target.value)}/>

                    </div>
                    <div className="input-container">
                        <label>Email </label>
                        <input type="email" name="email" autoComplete="off" required onChange={e => setEmail(e.target.value)}/>

                    </div>
                    <div className="input-container">
                        <label>Telephone</label>
                        <input type="number" name="telephone" autoComplete="off"required  onChange={e => setTelephone(e.target.value)}/>

                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="pass" autoComplete="off" required onChange={e => setPassword(e.target.value)}/>

                    </div>
                    <div className="input-container">
                        <label>Confirm Password </label>
                        <input type="password" name="pass" autoComplete="off" required onChange={e => setPwdConfirm(e.target.value)}/>

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