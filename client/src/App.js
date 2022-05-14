import React from "react"
import './App.css';
import Home from "./components/Home"
import Login from "./components/Login"
import Error from "./components/Error"
import Rooms from "./components/Rooms"
import Navbar from "./components/Navbar"
import Gym from "./components/Gym"
import Restaurant from "./components/Restaurant"
import Spa from "./components/Spa"
import Parking from "./components/Parking"
import SingleRoom from "./components/SingleRoom";
import data from "./data";



import {Route,Routes} from "react-router-dom";

import Facilities from "./components/Facilities";
import Contact from "./components/Contact";

function App() {
  return (

      <>
        <Navbar/>
        <Routes>
          <Route exact path ="/" element={<Home/>}/>
          <Route exact path="/rooms/" element={<Rooms/>}/>
            <Route exact path="/rooms/:slug" element={<SingleRoom/>}/>
          <Route exact path="/login/" element={<Login/>}/>
          <Route exact path="/gym/" element={<Gym/>}/>
          <Route exact path="/spa/" element={<Spa/>}/>
          <Route exact path="/restaurant/" element={<Restaurant/>}/>
          <Route exact path="/facilities/" element={<Facilities/>}/>
          <Route exact path="/parking/" element={<Parking/>}/>
            <Route exact path="/contact/" element={<Contact/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </>
  );
}

export default App;
