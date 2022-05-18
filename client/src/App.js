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



import {Route,Switch} from "react-router-dom";

import Facilities from "./components/Facilities";
import Contact from "./components/Contact";

import Booknow from "./components/Booknow";

function App() {
  return (

      <>
          <Navbar/>
        <Switch>
          <Route exact path ="/" component={Home}/>
          <Route exact path="/rooms/" component={Rooms}/>
            <Route exact path="/rooms/:slug" component={SingleRoom}/>
          <Route exact path="/login/" component={Login}/>
          <Route exact path="/gym/" component={Gym}/>
          <Route exact path="/spa/"component={Spa}/>
          <Route exact path="/restaurant/"component={Restaurant}/>
          <Route exact path="/facilities/" component={Facilities}/>
          <Route exact path="/parking/" component={Parking}/>
            <Route exact path="/contact/" component={Contact}/>
            <Route exact path="/booknow/:slug" component={Booknow}/>
          <Route  path="*" component={Error}/>
        </Switch>
      </>
  );
}

export default App;
