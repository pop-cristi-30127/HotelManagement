import React from 'react'
import Hero from "./Hero"
import Banner from "./Banner";
import {Link, useNavigate} from 'react-router-dom';
export default function Error()
{
   // const navigate = useNavigate();
    return(
        <Hero hero="defaultHero">
            <Banner title="404 Error" subtitle="Page Not Found">
                <Link to="/" className="btn-primary">
                    Return Home
                </Link>
            </Banner>

        </Hero>
    )
}