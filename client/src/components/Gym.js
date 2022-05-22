import React from 'react'
import Hero from "./Hero";
import BannerFacilities from "./BannerFacilities"

import Equipment from "./Equipment";


export default function Gym()
{
    return(

        <React.Fragment>
        <Hero hero="gymHero">

        <BannerFacilities className="center" title="Gym" subtitle="Hard Work Never Fails"  >

            <p> Schedule </p>
               <p>07:00-20:00</p>



        </BannerFacilities>

        </Hero>
            <Equipment/>
        </React.Fragment>


    )
}