import React from 'react'
import Hero from "./Hero"
import Banner from "./Banner"
import Facilities from "./Facilities"
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    return (
        <React.Fragment>
        <Hero hero="defaultHero">
        <Banner title="Seven Seas" subtitle="'The great advantage of a hotel is that it is'">
            <p>'a refuge from home life.'</p>

        <button
            className="btn-primary"
            onClick={() => navigate('/rooms/')}>
            Explore
        </button>
        </Banner>
        </Hero>

            <Facilities/>
        </React.Fragment>
    )
}

export default Home;