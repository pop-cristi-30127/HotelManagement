import React from 'react'
import Hero from "./Hero";
import { useNavigate } from 'react-router-dom';
import Banner from "./Banner";
import TypesOfCuisine from "./TypesOfCuisine"
const Restaurant = () => {

        return (
            <React.Fragment>
            <Hero hero="restaurantHero">
                <Banner title="Seven Seas Restaurant" subtitle="Welcome to our restaurant">
                    <p>'quality not quantity is our motto.'</p>


                </Banner>
                </Hero>
                <TypesOfCuisine/>
                </React.Fragment>
        )

}
export default  Restaurant;