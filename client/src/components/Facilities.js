import React,{Component} from "react";
import Title from "./Title";

import SPA from "../images/SPA.jpg";
import SPA1 from "../images/SPA1.jpg";
import Gym from "../images/Gym.jpg";
import Parking from "../images/parking.jpg";

import {Col, ListGroup} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";




export default class Facilities extends Component
{
    state={
        facilities:[
            {

                photo: <Link to="/restaurant/"><img height={400} width={250}   src={SPA} alt="Restaurant" /></Link>,
                title:"Restaurant",
                info:'proba'

            },
            {
                photo:<Link to="/spa/"><img height={400} width={250} src={SPA1} alt="SPA" /></Link>,
                title:"Spa",
                info:'proba'

            },
            {
                photo:<Link to="/gym/"><img height={400} width={250} src={Gym} alt="Gym" /></Link>,
                title:"Gym",
                info:'proba'

            },
            {
                photo:<Link to="/parking/"><img height={400} width={250} src={Parking} alt="Parking" /></Link>,
                title:"Car Parking",
                info:'proba'

            }

        ]
    }
    render(){
        return(

            <section className="services">
              <Title title="Facilities"/>
                <div className="services-center">
                    {this.state.facilities.map((item,index)=>{
                        return <Col key={index} className="service">
                            <span>{item.photo}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </Col>


                        }

                    )}
                </div>

            </section>
        )
    }
}