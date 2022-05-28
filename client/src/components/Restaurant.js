import React from 'react'
import Hero from "./Hero";
import Banner from "./Banner";
import Menu from "./Menu";
const Restaurant = () => {

        return (
            <React.Fragment>
            <Hero hero="restaurantHero">
                <Banner title="Seven Seas Restaurant" subtitle="Welcome to our restaurant">
                    <p>'quality not quantity is our motto.'</p>


                </Banner>
                </Hero>
                <br/>
                <Menu/>
                </React.Fragment>
        )

}
export default  Restaurant;