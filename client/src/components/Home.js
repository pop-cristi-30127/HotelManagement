import React from 'react'
import Hero from "./Hero"
import Banner from "./Banner"
import Facilities from "./Facilities"
import {Link, useNavigate} from 'react-router-dom';
import Contact from "./Contact";
import FeaturedRooms from "./FeaturedRooms";
const Home = () => {
    //const navigate = useNavigate();
    return (
        <React.Fragment>
        <Hero hero="defaultHero">
        <Banner title="Beach Resort" subtitle="'The great advantage of a hotel is that it is'">
            <p>'a refuge from home life.'</p>

            <Link to="/rooms" className="btn-primary">
                Explore
            </Link>
        </Banner>
        </Hero>

            <Facilities/>
            <FeaturedRooms/>
            <Contact/>

        </React.Fragment>
    )
}

export default Home;