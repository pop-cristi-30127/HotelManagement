import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";

import Hero from "./Hero"
import axios from "../api/axios";


//import "../App.css"
const LOGIN_URL = "/login";

function Login() {
    // React States
    const [errorMessages, setErrorMessages] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    // const navigate = useNavigate();
    const[user,setUser]=useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [jsontoken,setJsontoken]=useState('');

    useEffect(() => {
        setErrorMessages('')
    }, [Email, Password])


    const handleSubmit = async (event) => {
        //Prevent page reload
        event.preventDefault();
        console.log(Email, Password);
        try {
            const user={Email, Password};
            const response = await axios.post(LOGIN_URL,
                JSON.stringify(user),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: false
                });
            setUser(response.data);

            console.log(response);
            setEmail('')
            setPassword('')
            setJsontoken('')
            setErrorMessages('')
            setIsSubmitted(true);
            localStorage.setItem('user',response.data);


        } catch (err) {
            if (err) {
                setErrorMessages(err)
            }
        }
    };
  /*  useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, []);*/
    const handleLogout=async(event)=>{
        event.preventDefault();
        try{

            localStorage.removeItem('user');


        }catch(err){
            if(err){
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
                    <label>Email </label>
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
                <small className="reg1">Don't have an account?  <Link to="/register/" className="reg">Register now</Link></small>


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



                        <div className="button-container">
                           <button className="btn-primary" onClick={handleLogout}>Logout</button>
                        </div>



                    </div> : renderForm}


                </div>
            </div>
        </Hero>


    );

}

export default Login;