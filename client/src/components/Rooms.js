import React from 'react'
import {Link} from "react-router-dom";
import Banner from "./Banner";
import Hero from "./Hero";
import RoomsContainer from "./RoomsContainer";

export default function Rooms()
{
    return(
        <>
        <Hero hero="roomsHero">
            <Banner title="our rooms">
                <Link to="/" className="btn-primary">
                    return home
                </Link>
            </Banner>
        </Hero>
        <RoomsContainer/>
        </>
    )
}