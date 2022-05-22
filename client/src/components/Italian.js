import React from 'react'
import Hero from "./Hero";
import { useNavigate } from 'react-router-dom';
import Banner from "./Banner";
import TypesOfCuisine from "./TypesOfCuisine"

const Italian = () => {

    return (


                <Banner title="Italian Menu" subtitle="Pasta">

                    <p>'Paste cu pancetta si crema de dovleac'</p>
                    <p>'Paste cu ton'</p>
                    <p>'Paste Carbonara'</p>

                </Banner>



    )

}
export default  Italian;


