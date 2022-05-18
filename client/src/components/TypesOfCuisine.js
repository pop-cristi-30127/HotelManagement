import React,{Component} from "react";
import Title from "./Title";

import Italian from "../images/italian_logo.jpg";
import Chinese from "../images/chinese_food_logo.jpg";
import French from "../images/french_logo.jpg";
import Drinks from "../images/drinks_logo.jpg";

import {Col, ListGroup} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";




export default class TypesOfCuisine extends Component
{
    state={
        facilities:[
            {

                photo: <Link to="/Italian_Food/"><img height={400} width={250}  src={Italian} alt="Italian Food" /></Link>,
                title:"Italian Food",
                info:'"Delizioso"'

            },
            {
                photo:<Link to="/Chinese Food/"><img height={400} width={250} src={Chinese} alt="Chinese Food" /></Link>,
                title:"Chinese Food",
                info:'\n' +
                    '"美味的"'

            },
            {
                photo:<Link to="/French Food/"><img height={400} width={250} src={French} alt="French Food" /></Link>,
                title:"French Food",
                info:'\n' +
                    '"Délicieux"'

            },
            {
                photo:<Link to="/Drinks/"><img height={400} width={250} src={Drinks} alt="Drinks" /></Link>,
                title:"Drinks",
                info: '"Refreshing"'

            }

        ]
    }
    render(){
        return(

            <section className="services">
                <Title title="Menu"/>
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