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




import {Route,Routes} from "react-router-dom";
import Italian from "./components/Italian";

function App() {
  return (

      <>
        <Navbar/>
        <Routes>
          <Route exact path ="/" element={<Home/>}/>
          <Route exact path="/rooms/" element={<Rooms/>}/>
          <Route exact path="/login/" element={<Login/>}/>
          <Route exact path="/gym/" element={<Gym/>}/>
          <Route exact path="/spa/" element={<Spa/>}/>
          <Route exact path="/restaurant/" element={<Restaurant/>}/>
          <Route exact path="/parking/" element={<Parking/>}/>
            <Route exact path="/Italian_Food/" element={<Italian/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </>

  );
}

export default App;

