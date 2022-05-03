import React,{Component} from "react";
import {Col, ListGroup} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import Title from "./Title";
import Cardio from "../images/cardio.jpg";
import Weights from "../images/weights.jpg";
import GymEquipment from "../images/gymequipment.jpg";

export default class Equipment extends Component
{
    state={
        facilities:[
            {

                photo: <img height={450} width={350}   src={Cardio} alt="Cardio" />,
                title:"Cardio",


            },
            {
                photo:<img height={450} width={350} src={Weights} alt="Weights" />,
                title:"Weights",


            },
            {
                photo:<img height={450} width={350} src={GymEquipment} alt="Gym Equipment" />,
                title:"Gym Equipment",


            }

        ]
    }
    render(){
        return(

            <section className="services">
                <Title title="Equipment"/>
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