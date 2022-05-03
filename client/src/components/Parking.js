import React from 'react'
import Hero from "./Hero";
import BannerFacilities from "./BannerFacilities";


export default function Parking()
{
    return(
        <Hero hero="parkingHero">
            <BannerFacilities title="Parking " subtitle="200 spaces">

            </BannerFacilities>

        <div>
           Parking Page
        </div>
        </Hero>
    )
}